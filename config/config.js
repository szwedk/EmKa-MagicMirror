

let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",   // this variable is provided as a consistent location
			   // it is currently only used by 3rd party modules. no MagicMirror code uses this value
			   // as we have no usage, we  have no constraints on what this field holds
			   // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "calendar",
			header: "Kamil's Personal",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "your_calendar_url_here"
					}
				]
			}
		},
		/*
		{
			module: "calendar",
			header: "KAMIL'S WORK",
			position: "top_left",
			config: {
			  calendars: [
				{
				  symbol: "calendar-check",
				  url: ""
				}
			  ],
			  maximumEntries: 5,
			  timeFormat: "absolute",
			  urgency: 1,
			  wrapEvents: true,
			  titleReplace: {
				"Wedding for Emma": "👰 Emma Wedding",
				"Wedding with Emma Cleary": "👰 Emma Wedding",
				"Wedding Emma Cleary": "👰 Emma Wedding",
				"Wedding Chris": "🎥 Chris Wedding",
				"Wedding for chris yu": "🎥 Chris Wedding",
				"Chris YU wedding HOLD": "⏳ Chris YU HOLD",
				"Chris YU HOLD.": "⏳ Chris YU HOLD",
			  }
			}
		},
		*/
		
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				tempUnits: "imperial",
				type: "current",
				lat: "your_lat_here",
				lon: "your_lon_here"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				tempUnits: "imperial",
				type: "hourly",
				lat: "your_lat_here",
				lon: "your_lon_here",
				showSun: true
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "3-Day Forecast",
			config: {
			  weatherProvider: "openmeteo",
			  tempUnits: "imperial",
			  type: "daily", // or "forecast"
			  lat: "your_lat_here",
			  lon: "your_lon_here",
			  maxNumberOfDays: 3, // ✅ Limit forecast days to 3
			  fade: false
			}
		  },
		{
			module: "MMM-CalendarExt2",
			position: "middle_left",
			config: {
				calendars: [
					{
						name: "Kamil",
						url: "your_calendar_url_here",
						color: "#00BCD4"
					}
				],
				views: [
					{
						name: "CompactMonth",
						mode: "month",
						type: "calendar",
						position: "middle_left",
						className: "compact-calendar",
						slotCount: 1,
						slotHeight: "60px",
						maxItems: 25
					}
				],
				scenes: [
					{
						name: "default",
						views: ["CompactMonth"]
					}
				]
			}
		},
		  {
			module: "newsfeed",
			header: "NYT",
			position: "bottom_bar",
			classes: "news-left",
			config: {
			  showSourceTitle: false,
			  showPublishDate: true,
			  wrapTitle: true,
			  maxNewsItems: 5,
			  feeds: [
				{
				  title: "New York Times",
				  url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
				}
			  ]
			}
		  },
		  {
			module: "newsfeed",
			header: "Fox News",
			position: "bottom_bar",
			classes: "news-center",
			config: {
			  showSourceTitle: false,
			  showPublishDate: true,
			  wrapTitle: true,
			  maxNewsItems: 5,
			  feeds: [
				{
				  title: "Fox News",
				  url: "http://feeds.foxnews.com/foxnews/latest"
				}
			  ]
			}
		  },
		  {
			module: "newsfeed",
			header: "BBC News",
			position: "bottom_bar",
			classes: "news-right",
			config: {
			  showSourceTitle: false,
			  showPublishDate: true,
			  wrapTitle: true,
			  maxNewsItems: 5,
			  feeds: [
				{
				  title: "BBC",
				  url: "http://feeds.bbci.co.uk/news/rss.xml"
				}
			  ]
			}
		  },
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
