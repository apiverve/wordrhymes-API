using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.RhymingWords
{
    /// <summary>
    /// Query options for the Rhyming Words API
    /// </summary>
    public class RhymingWordsQueryOptions
    {
        /// <summary>
        /// The word for which you want to get rhyming words
        /// </summary>
        [JsonProperty("word")]
        public string Word { get; set; }

        /// <summary>
        /// Limit the number of word rhymes returned
        /// </summary>
        [JsonProperty("limit")]
        public string Limit { get; set; }
    }
}
