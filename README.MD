# Simply-Dash
Simply-Dash is a web-based dashboard used for displaying the Time, Date, Weather and Google Calendar Events.

![Screenshot 1](./Images/Image_1.png)
![Screenshot 2](./Images/Image_2.png)

## Running
You can ultimetly use whatever web server you want but I reccomment python.
- cd ~/dashboard && python3 -m http.server 3000

## Features
### Date
Enter a custom date format to have the date displaying how you want.

### Weather
Weather uses Openweather.com as the weather provider, see the section below on how to obatin your own api key.

### Google Calendar
Display events from your Google Calendar.

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
    - Your OpenWeatherMap API key goes here. See the 'Getting API Keys' section.
- API Request Timer: (Default: 20)
    - An API request will take place once every X minutes.
    - Note: This is limited based on your OpenWeatherMap API plan. [OpenWeatherMap Pricing](https://openweathermap.org/full-price)
- Forecast Days: (Default: 3)
    - How many forecast days to display.

### Google Calendar Settings
- Google Client ID:
    - Your OAuth client ID goes here. See the 'Getting API Keys' section.
- Google Client Secret:
    - Your OAuth client secret goes here. See the 'Getting API Keys' section.
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

## Getting API keys
### Weather
To get an OpenWeatherMap API Key, do the following:
- Go to: [OpenWeatherMap](https://openweathermap.org/)
- Create an account
- Select 'your account name' at the top right
    - Select 'My API keys'
- Copy your API Key to somewhere safe.

### Google Calendar
To get Google Calendar Working you need two things:
- Client ID
- Client Secret 

To get these two things you need to:
- Visit [Google Cloud Console](https://console.cloud.google.com/) and login with your Google account of choise.
- Create a new project.
- Select your newly made project

#### Enable Google Calendar
- Menu (Left of 'Google Cloud):
    - APIs and services
        - Libary
        - Search or scroll down to and select 'Google Calendar API'.
            - Enable it.

Creating you OAuth
- Menu:
    - APIs and services
        - OAuth Consent Screen
            - Get started:
                - App Info:
                    - App Name - Can be anything
                    - User support email - Just enter your own
                - Audiance:
                    - External - It's fine to select this
                - Contact Info:
                    - Email - Just enter your own again.
                - Finish
                    - I agree
                    - Create

Creating your Client
- Menu:
    - APIs and services
        - OAuth Consent Screen
            - Clients:
                - Create Client.
                    - Application Type - Web App
                    - Name - Anything you want
                    - Authorised JavaScript origins - NOTHING
                    - Authorised redirect URIs - http://localhost:3000/callback.html
                    - Create
                    
                    - IMPORTANT!!!!!!
                        - Copy both of the following to somewhere safe:
                            - Client ID
                            - Client Secret
                    - Okay

Enabling your account access
- Menu:
    - APIs and services
        - OAuth Consent Screen
            - Audience
                - Test Users
                    - Add - The email of the google calendar you want to access.

## Maybe one day
- Change how events are diplayed, maybe use a grid like structure.
- More customisation for end user.
- Tabed based settings moodle.
- Background behind content.
- Custom CSS Inputs.
