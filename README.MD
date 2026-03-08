# Simply-Dash

## Features
Simply-Dash is a simple web dashbaord that displays the time, date, weather and Google calendar.

### Date
Enter a custom date format to have the date displaying how you want.

### Weather
Weather uses Openweather.com as the weather provider, you can get your free OpenWeather API key here: [OpenWeatherMap](https://openweathermap.org/api)

### Google Calendar
Erm it's a little more complicated, I need to write intructions...

## Settings
### General Settings
- Time Format: (Default: 24hr)
    - Change the time format between 24hr and 12hr (am/pm).
- Date Format: (Default: ddd, Do MMM)
    - Set the dat format to how you want based on date format codes.
    - Here for codes: [DevHints](https://devhints.io/datetime).
- Hide the settings button (Default: false)
    -At the top left of the screen is a gear icon used to acess the settings, toggleing this setting will toggle the visability of the icon.
- Theme: (Default: RosePine)
    - Allows you to change between 5 baked in themes, if you don't like one, just edit the js file.
        - RosePine
        - Catpuccin
        - Everforest
        - Guvbox
        - Nord

### Weather Settings
- Units: (Default: Celsius (°C))
    - Switch between Celsius (°C) and Fahrenheit (°F).
- Location:
    - Enter the location of where you want to track the weather.
- Weather API Key:
    - Get your free OpenWeather API key here: [OpenWeatherMap](https://openweathermap.org/api)
- API Request Timer: (Default: 20)
    - An API request will take place once every X minutes.
    - Note: This is limited based on your OpenWeatherMap API plan. [OpenWeatherMap Pricing](https://openweathermap.org/full-price)
- Forecast Days: (Default: 3)
    - How many forecast days to display.

### Google Calendar Settings
- Google Client ID:
    - Your OAuth client ID goes here. You can get it from here: [Placeholder](https://google.com)
- Google Client Secret:
    - Your OAuth client secret goes here. You can get it from here: [Placeholder](https://google.com)
- API Request Timer: (Default: 10)
    - An API request will take place once every X minutes.
- Calendars:
    - Get Calendars
        - Gets the calendars link to your account.
    - Checkbox
        - Toggle to show each calendars events or not.
    - Icon
        - Display a icon of your choise for each calendar.
        -To find the icon you want, visit the link, search for an icon and click on it, under 'Icon Font' copy just the 'bi-icon-name' part and paste it in the icon textbox. [BootStrap Icons](https://icons.getbootstrap.com/)
- Max Events: (Default: 10)
    - The maximum number of events to be displayed.
- Maximum Number of Days: (Default: 10)
    - The maximum number of days to display which containing events.
- Refresh now
    - Sync with Google Calendar to get any changes now.