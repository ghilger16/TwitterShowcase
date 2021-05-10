using System.Collections.Generic;

namespace Twitter.Libs.Models
{
    public class KeywordModel
    {
        public TweetModel[] Statuses { get; set; }
    }
    public class TweetModel
    {
        public string Created_at { get; set; }

        public string Full_text { get; set; }

        public string Text { get; set; }

        public int Retweet_count { get; set; }

        public int Favorite_count { get; set; }

        public User User { get; set; }

        public Entities entities { get; set; }

        public Extended_entities Extended_entities { get; set; }

        public Retweeted_status Retweeted_status { get; set; }


    }


    public class User
    {
        public string Name { get; set; }

        public string Screen_name { get; set; }

        public string Profile_image_url_https { get; set; }

        public bool Verified { get; set; }

    }

    public class Entities
    {
        public IEnumerable<Hashtags> hashtags { get; set; }




    }

    public class Hashtags
    {
        public string Text { get; set; }
    }

    public class Extended_entities
    {
        public IEnumerable<Tweet_media> Media { get; set; }

    }

    public class Tweet_media
    {
        public string type { get; set; }

        public string Media_url_https { get; set; }

        public Video_info Video_info { get; set; }

    }

    public class Video_info
    {
        public IEnumerable<Variants> variants { get; set; }
    }

    public class Variants
    {
        public string url { get; set; }
    }

    public class Retweeted_status
    {
        public string Created_at { get; set; }

        public string Full_text { get; set; }

        public int Retweet_count { get; set; }

        public int Favorite_count { get; set; }

        public User User { get; set; }

        public Entities entities { get; set; }

        public Extended_entities Extended_entities { get; set; }

    }

}


