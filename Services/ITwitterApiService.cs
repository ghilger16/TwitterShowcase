using System.Collections.Generic;
using System.Threading.Tasks;
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
}
