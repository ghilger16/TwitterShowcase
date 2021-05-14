using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Twitter.Libs.Services;

namespace TwitterServer1.Controllers
{

    [Route("[controller]")]
    [ApiController]


    public class TweetController : ControllerBase
    {
        private readonly ITwitterApiService _twitterApiService;

        public TweetController(ITwitterApiService twitterApiService)
        {
            _twitterApiService = twitterApiService;
        }


        
        [HttpGet]
        [Route("user/{searchQuery}")]
        public async Task<IActionResult> GetUserTweets(string searchQuery)
        {
            var result = await _twitterApiService.GetUserTweets(searchQuery);

            return Ok(result);
        }

        
        [HttpGet]
        [Route("keyword/{searchQuery}")]
        public async Task<IActionResult> GetKeywordTweets(string searchQuery)
        {
            var result = await _twitterApiService.GetKeywordTweets(searchQuery);

            return Ok(result);
        }

        
        [HttpGet]
        [Route("randomUser/{searchQuery}")]
        public async Task<IActionResult> GetRandomUserData(string searchQuery)
        {
            var result = await _twitterApiService.GetRandomUserData(searchQuery);

            return Ok(result);
        }

        
        [HttpGet]
        [Route("randomTweet/{searchQuery}")]
        public async Task<IActionResult> GetRandomTweets(string searchQuery)
        {
            var result = await _twitterApiService.GetRandomTweets(searchQuery);

            return Ok(result);
        }



    }
}
