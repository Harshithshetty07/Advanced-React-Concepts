import RestaurantCard from "./RestauantCard";


 const resList = [
            {
                "type": "restaurant",
                "info": {
                    "resId": 20628188,
                    "name": "Babylonia - Global Food & Cocktails",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/8\/20628188\/edf9fd4cae26698aec51a5791412126b_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/8\/20628188\/edf9fd4cae26698aec51a5791412126b_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/8\/20628188\/9467c3126121535d547bdee789c84ccf_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.2",
                        "rating_text": "4.2",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "2,751",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.3",
                                "reviewCount": "2,722",
                                "reviewTextSmall": "2,722 Reviews",
                                "subtext": "2,722 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.3",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.0",
                                "reviewCount": "29",
                                "reviewTextSmall": "29 Reviews",
                                "subtext": "29 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.0",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,500 for two"
                    },
                    "cfo": {
                        "text": "\u20b9600 for one"
                    },
                    "locality": {
                        "name": "Koramangala 7th Block, Bangalore",
                        "address": "9, KHB Colony, 20th Main Road, Koramangala 7th Block, Bangalore",
                        "localityUrl": "bangalore\/koramangala-7th-block-restaurants"
                    },
                    "timing": {
                        "text": "Opens at 12noon",
                        "color": "#ab000d"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/italian\/",
                            "name": "Italian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/mughlai\/",
                            "name": "Mughlai"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/mediterranean\/",
                            "name": "Mediterranean"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/bar-food\/",
                            "name": "Bar Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                            "name": "Desserts"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,500 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 10,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "10% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/babylonia-global-food-cocktails-koramangala-7th-block-bangalore\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "4.6 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"banner_id\":\"8375852\",\"bzone\":\"0\",\"campaign_id\":\"17350413\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"20628188\",\"isNewAd\":\"34\",\"ad_position\":\"10\",\"slider_position\":\"10\",\"slider_sequence\":\"10\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":73,\\\"boosted_rank\\\":10,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.036278\\\",\\\"cost_for_two_ctr\\\":\\\"0.055898\\\",\\\"distance\\\":\\\"4.4151201248168945\\\",\\\"organic_ctr\\\":\\\"0.00933\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"262\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.7452076443559951\\\",\\\"cost_for_two_ctr\\\":\\\"0.5988387041480974\\\",\\\"cost_per_unit\\\":\\\"0.5439633079995735\\\",\\\"distance\\\":\\\"0.46660564078656724\\\",\\\"organic_ctr\\\":\\\"0.022091468945433707\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.03145294791799312\\\"},\\\"search_id\\\":\\\"1adeccbc-d8d8-43e5-b341-bd504780d7ca\\\",\\\"section_name\\\":\\\"featured\\\",\\\"total_score\\\":0.38450917187259387}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"1adeccbc-d8d8-43e5-b341-bd504780d7ca\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20628188\",\"element_type\":\"listing\",\"rank\":10,\"metadata\":{\"is_ad\":\"true\"}}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 50877,
                    "name": "Scottish Pub",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/7\/50877\/67b31049ff23728c5e2d154d2333abe6_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/7\/50877\/67b31049ff23728c5e2d154d2333abe6_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/7\/50877\/3b37f202c719d96d5411c52f05533d61_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "3.9",
                        "rating_text": "3.9",
                        "rating_subtitle": "Good",
                        "rating_color": "9ACD32",
                        "votes": "1,188",
                        "subtext": "REVIEW",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.3",
                                "reviewCount": "1,183",
                                "reviewTextSmall": "1,183 Reviews",
                                "subtext": "1,183 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.3",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "3.5",
                                "reviewCount": "5",
                                "reviewTextSmall": "5 Reviews",
                                "subtext": "5 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "3.5",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,200 for two"
                    },
                    "cfo": {
                        "text": "\u20b9500 for one"
                    },
                    "locality": {
                        "name": "St. Marks Road, Bangalore",
                        "address": "17\/21, Vasavi Complex, St. Marks Road, Bangalore",
                        "localityUrl": "bangalore\/st-marks-road-restaurants"
                    },
                    "timing": {
                        "text": "Opens at 12noon",
                        "color": "#ab000d"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/chinese\/",
                            "name": "Chinese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/burger\/",
                            "name": "Burger"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/bar-food\/",
                            "name": "Bar Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/south-indian\/",
                            "name": "South Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/pasta\/",
                            "name": "Pasta"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,200 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 10,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "10% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/scottish-pub-st-marks-road\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "713 m",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"banner_id\":\"9344805\",\"bzone\":\"0\",\"campaign_id\":\"18321138\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"50877\",\"isNewAd\":\"34\",\"ad_position\":\"11\",\"slider_position\":\"11\",\"slider_sequence\":\"11\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":170,\\\"boosted_rank\\\":11,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.022291\\\",\\\"cost_for_two_ctr\\\":\\\"0.032405\\\",\\\"distance\\\":\\\"0.3193763494491577\\\",\\\"organic_ctr\\\":\\\"0.009431\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"1263\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.33585999004945993\\\",\\\"cost_for_two_ctr\\\":\\\"0.3471567535138842\\\",\\\"cost_per_unit\\\":\\\"0.3675926092071935\\\",\\\"distance\\\":\\\"1\\\",\\\"organic_ctr\\\":\\\"0.023296892156394706\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.15892015790143893\\\"},\\\"search_id\\\":\\\"1adeccbc-d8d8-43e5-b341-bd504780d7ca\\\",\\\"section_name\\\":\\\"featured\\\",\\\"total_score\\\":0.3766437582129779}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"1adeccbc-d8d8-43e5-b341-bd504780d7ca\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"50877\",\"element_type\":\"listing\",\"rank\":11,\"metadata\":{\"is_ad\":\"true\"}}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 55768,
                    "name": "Citrus - The Leela Palace",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/8\/55768\/d962767510039cc9af518462d899cb30_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/8\/55768\/d962767510039cc9af518462d899cb30_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/8\/55768\/17cd9f1e1b8805f1b762e25544e6a124_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.1",
                        "rating_text": "4.1",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "1,664",
                        "subtext": "REVIEW",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.0",
                                "reviewCount": "1,522",
                                "reviewTextSmall": "1,522 Reviews",
                                "subtext": "1,522 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.0",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.1",
                                "reviewCount": "142",
                                "reviewTextSmall": "142 Reviews",
                                "subtext": "142 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.1",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b94,700 for two"
                    },
                    "cfo": {
                        "text": "\u20b91,900 for one"
                    },
                    "locality": {
                        "name": "Old Airport Road, Bangalore",
                        "address": "The Leela Palace, 23, Old Airport Road, Bangalore",
                        "localityUrl": "bangalore\/old-airport-road-restaurants"
                    },
                    "timing": {
                        "text": "Opens at 12noon",
                        "color": "#ab000d"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                            "name": "Desserts"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b94,700 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 10,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "10% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/citrus-the-leela-palace-airport-road\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "6.1 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"banner_id\":\"9348821\",\"bzone\":\"0\",\"campaign_id\":\"18325161\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"55768\",\"isNewAd\":\"34\",\"ad_position\":\"12\",\"slider_position\":\"12\",\"slider_sequence\":\"12\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":139,\\\"boosted_rank\\\":12,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.028843\\\",\\\"cost_for_two_ctr\\\":\\\"0.057597\\\",\\\"distance\\\":\\\"5.682347297668457\\\",\\\"organic_ctr\\\":\\\"0.010783\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"893\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.5276127483976704\\\",\\\"cost_for_two_ctr\\\":\\\"0.6170401954062393\\\",\\\"cost_per_unit\\\":\\\"0.6166741201051472\\\",\\\"distance\\\":\\\"0.3015728987712734\\\",\\\"organic_ctr\\\":\\\"0.039432854346684476\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.11180440595950591\\\"},\\\"search_id\\\":\\\"1adeccbc-d8d8-43e5-b341-bd504780d7ca\\\",\\\"section_name\\\":\\\"featured\\\",\\\"total_score\\\":0.3687797670587858}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"1adeccbc-d8d8-43e5-b341-bd504780d7ca\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"55768\",\"element_type\":\"listing\",\"rank\":12,\"metadata\":{\"is_ad\":\"true\"}}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 19890381,
                    "name": "Secret Story",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/19890381\/d74ad221176972dfa5f8499f6a7d57ba_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/19890381\/d74ad221176972dfa5f8499f6a7d57ba_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": false
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.0",
                        "rating_text": "4.0",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "5,930",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "3.9",
                                "reviewCount": "5,905",
                                "reviewTextSmall": "5,905 Reviews",
                                "subtext": "5,905 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "3.9",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "600"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.0",
                                "reviewCount": "25",
                                "reviewTextSmall": "25 Reviews",
                                "subtext": "25 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.0",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,500 for two"
                    },
                    "cfo": {
                        "text": "\u20b9600 for one"
                    },
                    "locality": {
                        "name": "Indiranagar, Bangalore",
                        "address": "968, 3rd & 4th Floor, HAL 2nd Stage, 12th Main Road, Indiranagar, Bangalore",
                        "localityUrl": "bangalore\/indiranagar-restaurants"
                    },
                    "timing": {
                        "text": "Opens at 12noon",
                        "color": "#ab000d"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/fast-food\/",
                            "name": "Fast Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                            "name": "Desserts"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                            "name": "Beverages"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTlcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/vietnamese\/",
                            "name": "Vietnamese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/italian\/",
                            "name": "Italian"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,500 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 10,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "10% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/secret-story-indiranagar-bangalore\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "4.9 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"banner_id\":\"8479063\",\"bzone\":\"0\",\"campaign_id\":\"17454470\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"19890381\",\"isNewAd\":\"34\",\"ad_position\":\"13\",\"slider_position\":\"13\",\"slider_sequence\":\"13\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":36,\\\"boosted_rank\\\":13,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.035941\\\",\\\"cost_for_two_ctr\\\":\\\"0.053151\\\",\\\"distance\\\":\\\"4.469471454620361\\\",\\\"organic_ctr\\\":\\\"0.017118\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"7864\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.7353449032748983\\\",\\\"cost_for_two_ctr\\\":\\\"0.569409924580048\\\",\\\"cost_per_unit\\\":\\\"0.5171842981380679\\\",\\\"distance\\\":\\\"0.45952739216484645\\\",\\\"organic_ctr\\\":\\\"0.11504033990547574\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.9994906405195467\\\"},\\\"search_id\\\":\\\"1adeccbc-d8d8-43e5-b341-bd504780d7ca\\\",\\\"section_name\\\":\\\"featured\\\",\\\"total_score\\\":0.3687765978149057}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"1adeccbc-d8d8-43e5-b341-bd504780d7ca\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19890381\",\"element_type\":\"listing\",\"rank\":13,\"metadata\":{\"is_ad\":\"true\"}}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 21520226,
                    "name": "Rox",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/21520226\/8bbc6e759c4fb0504bdfe224203af055_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/21520226\/8bbc6e759c4fb0504bdfe224203af055_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/21520226\/ddf8f150c70a4ee7b351adb22fe8900d_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.2",
                        "rating_text": "4.2",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "636",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.2",
                                "reviewCount": "636",
                                "reviewTextSmall": "636 Reviews",
                                "subtext": "636 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.2",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Delivery",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "100"
                                },
                                "textColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,000 for two"
                    },
                    "cfo": {
                        "text": "\u20b9400 for one"
                    },
                    "locality": {
                        "name": "New BEL Road, Bangalore",
                        "address": "24, Jaladarsini Layout, Mathikere, New BEL Road, Bangalore",
                        "localityUrl": "bangalore\/new-bel-road-restaurants"
                    },
                    "timing": {
                        "text": "Opens in 16 minutes",
                        "color": "#e5521f"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/italian\/",
                            "name": "Italian"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,000 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 10,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "10% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/rox-new-bel-road-bangalore\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "7.3 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"banner_id\":\"8734987\",\"bzone\":\"0\",\"campaign_id\":\"17710438\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"21520226\",\"isNewAd\":\"34\",\"ad_position\":\"14\",\"slider_position\":\"14\",\"slider_sequence\":\"14\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":163,\\\"boosted_rank\\\":14,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.044984\\\",\\\"cost_for_two_ctr\\\":\\\"0.067015\\\",\\\"distance\\\":\\\"7.41801118850708\\\",\\\"organic_ctr\\\":\\\"0.014111\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"3135\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"1\\\",\\\"cost_for_two_ctr\\\":\\\"0.7179358073363045\\\",\\\"cost_per_unit\\\":\\\"0.6523368983273334\\\",\\\"distance\\\":\\\"0.07553499707644915\\\",\\\"organic_ctr\\\":\\\"0.07915214589201318\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.39730039475359735\\\"},\\\"search_id\\\":\\\"1adeccbc-d8d8-43e5-b341-bd504780d7ca\\\",\\\"section_name\\\":\\\"featured\\\",\\\"total_score\\\":0.36423506656620824}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"1adeccbc-d8d8-43e5-b341-bd504780d7ca\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21520226\",\"element_type\":\"listing\",\"rank\":14,\"metadata\":{\"is_ad\":\"true\"}}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 20540040,
                    "name": "Magique",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/0\/20540040\/212506e1d8f38dd0d9697ce408faaacf_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/0\/20540040\/212506e1d8f38dd0d9697ce408faaacf_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/0\/20540040\/85e03205173e5b6a317c3e53acc991c4_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.0",
                        "rating_text": "4.0",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "6,425",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.0",
                                "reviewCount": "6,417",
                                "reviewTextSmall": "6,417 Reviews",
                                "subtext": "6,417 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.0",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.0",
                                "reviewCount": "8",
                                "reviewTextSmall": "8 Reviews",
                                "subtext": "8 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.0",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,700 for two"
                    },
                    "cfo": {
                        "text": "\u20b9700 for one"
                    },
                    "locality": {
                        "name": "Koramangala 6th Block, Bangalore",
                        "address": "Plot 36, 100 Feet Road, Near SJR Junction, Koramangala 6th Block, Bangalore",
                        "localityUrl": "bangalore\/koramangala-6th-block-restaurants"
                    },
                    "timing": {
                        "text": "Opens at 12noon",
                        "color": "#ab000d"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxOFwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/modern-indian\/",
                            "name": "Modern Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/italian\/",
                            "name": "Italian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc3XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/sushi\/",
                            "name": "Sushi"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                            "name": "Desserts"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                            "name": "Beverages"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,700 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 10,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "10% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/magique-koramangala-6th-block-bangalore\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "5.2 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"banner_id\":\"7977080\",\"bzone\":\"0\",\"campaign_id\":\"16949668\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"20540040\",\"isNewAd\":\"34\",\"ad_position\":\"15\",\"slider_position\":\"15\",\"slider_sequence\":\"15\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":59,\\\"boosted_rank\\\":15,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.036385\\\",\\\"cost_for_two_ctr\\\":\\\"0.049452\\\",\\\"distance\\\":\\\"4.941097736358643\\\",\\\"organic_ctr\\\":\\\"0.013454\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"7864\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.7483391378149784\\\",\\\"cost_for_two_ctr\\\":\\\"0.5297823105930751\\\",\\\"cost_per_unit\\\":\\\"0.4811247577384652\\\",\\\"distance\\\":\\\"0.3981068512001183\\\",\\\"organic_ctr\\\":\\\"0.07131092757912828\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.9994906405195467\\\"},\\\"search_id\\\":\\\"1adeccbc-d8d8-43e5-b341-bd504780d7ca\\\",\\\"section_name\\\":\\\"featured\\\",\\\"total_score\\\":0.33721389350479897}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"1adeccbc-d8d8-43e5-b341-bd504780d7ca\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20540040\",\"element_type\":\"listing\",\"rank\":15,\"metadata\":{\"is_ad\":\"true\"}}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
        ]

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
               {resList.map((restaurant) => (
                <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
               ))}
            </div>
        </div>
    )
}

export default Body;