using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

using Twitter.Libs.Models;

namespace Twitter.Libs.Services
{

    public interface ITwitterApiService
    {
        Task<List<TweetModel>> GetUserTweets(string searchQuery);

        Task<KeywordModel> GetKeywordTweets(string searchQuery);

        Task<List<RandomUserModel>> GetRandomUserData(string searchQuery);

        Task<TweetModel> GetRandomTweets(string searchQuery);

    }


    public class TwitterApiService : ITwitterApiService
    {
        private readonly IConfiguration _config;

        public TwitterApiService(IConfiguration config)
        {
            _config = config;
        }


        public async Task<List<TweetModel>> GetUserTweets(string searchQuery)
        {
            var url = $"https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name={searchQuery}&count=50&tweet_mode=extended&exclude_replies=true";
            string json;
            json = await GetTweetsAsync(url);           

            return JsonConvert.DeserializeObject<List<TweetModel>>(json);

        }


        public async Task<KeywordModel> GetKeywordTweets(string searchQuery)
        {
            var url = $"https://api.twitter.com/1.1/search/tweets.json?q={searchQuery}&lang=en&tweet_mode=extended&result_type=popular&count=50";
            string json;
            json = await GetTweetsAsync(url);

            return JsonConvert.DeserializeObject<KeywordModel>(json);
            
        }


        public async Task<List<RandomUserModel>> GetRandomUserData(string searchQuery)
        {
            var url = $"https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name={searchQuery}&count=1";
            string json;
            json = await GetTweetsAsync(url);

            return JsonConvert.DeserializeObject<List<RandomUserModel>>(json);
            
        }

        public async Task<TweetModel> GetRandomTweets(string searchQuery)
        {
            var url = $"https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name={searchQuery}&count=50&tweet_mode=extended&exclude_replies=true";
            string json;
            json = await GetTweetsAsync(url);

            var tweets = JsonConvert.DeserializeObject<List<TweetModel>>(json);

                var random = new Random();
                var randomNum = random.Next(0, 50);

                TweetModel randomTweet = tweets[randomNum];
                return randomTweet;

            }


            private async Task<string> GetTweetsAsync(string url)
            {
                var accessToken = _config["AccessToken"];
                using (var client = new HttpClient())
                {
                    client.DefaultRequestHeaders.Authorization
                        = new AuthenticationHeaderValue("Bearer", accessToken);

                    var completedUrl = new Uri(url);
                    var response = await client.GetAsync(completedUrl);

                    string json;
                    using (var content = response.Content)
                    {
                        json = await content.ReadAsStringAsync();
                    }

                    return json;
                }
            }

        }
    }


