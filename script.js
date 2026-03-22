const STORAGE_KEYS = {
  GENERAL_TIME_FORMAT: 'dashboard_general_time_format',
  GENERAL_DATE_FORMAT: 'dashboard_general_date_format',
  GENERAL_SETTINGS_BUTTON_HIDE: 'dashboard_general_settings_button_hide',
  GENERAL_THEME: 'dashboard_general_theme',
  GENERAL_TIME_ALIGN: 'dashboard_general_time_align',
  
  WEATHER_UNITS: 'dashboard_weather_units',
  LOCATION: 'dashboard_location',
  WEATHER_API: 'dashboard_weather_api',
  WEATHER_FORECAST_DAYS: 'dashboard_weather_forecast_days',
  WEATHER_REFRESH_AMOUNT: 'dashboard_weather_refresh_amount',

  GOOGLE_CLIENT_ID: 'dashboard_google_client_id',
  GOOGLE_CLIENT_SECRET: 'dashboard_google_client_secret',
  GOOGLE_ACCESS_TOKEN: 'dashboard_google_access_token',
  GOOGLE_REFRESH_TOKEN: 'dashboard_google_refresh_token',
  GOOGLE_REFRESH_AMOUNT: 'dashboard_google_refresh_amount',
  GOOGLE_EVENTS_AMOUNT: 'dashboard_google_events_amount',
  GOOGLE_DAYS_AMOUNT: 'dashboard_google_days_amount',
  SELECTED_CALENDARS: 'dashboard_selected_calendar_ids',
  CALENDAR_ICONS: 'dashboard_calendar_icons'
};

const THEMES = {
  rosepine: {
    name: 'RosePine',
    base: '#191724',
    surface: '#1f1d2e',
    overlay: '#26233a',
    muted: '#6e6a86',
    subtle: '#908caa',
    text: '#e0def4',
    love: '#eb6f92',
    gold: '#f6c177'
  },
  catppuccin: {
    name: 'Catppuccin',
    base: '#181825',
    surface: '#1e1e2e',
    overlay: '#313244',
    muted: '#585b70',
    subtle: '#6c7086',
    text: '#cdd6f4',
    love: '#f38ba8',
    gold: '#f9e2af'
  },
  everforest: {
    name: 'Everforest',
    base: '#2d3830',
    surface: '#3d4844',
    overlay: '#4d5951',
    muted: '#859289',
    subtle: '#a3b18a',
    text: '#d5c4a1',
    love: '#e67e80',
    gold: '#fabd2f'
  },
  gruvbox: {
    name: 'Gruvbox',
    base: '#1d2021',
    surface: '#282828',
    overlay: '#3c3836',
    muted: '#665c54',
    subtle: '#7c6f64',
    text: '#ebdbb2',
    love: '#fb4934',
    gold: '#fabd2f'
  },
  nord: {
    name: 'Nord',
    base: '#2e3440',
    surface: '#3b4252',
    overlay: '#434c5e',
    muted: '#4c566a',
    subtle: '#d8dee9',
    text: '#eceff4',
    love: '#bf616a',
    gold: '#d08770'
  },
  void: {
    name: 'Void',
    base: '#0c0a0e',
    surface: '#13101a',
    overlay: '#1e1a28',
    muted: '#2c2638',
    subtle: '#3d3550',
    text: '#e8ddd0',
    love: '#c0253e',
    gold: '#c9922a'
  },
  silk: {
    name: 'Silk',
    base: '#faf7f5',
    surface: '#f2ece6',
    overlay: '#e8e0d6',
    muted: '#d8ccbf',
    subtle: '#c4b5a5',
    text: '#2a2030',
    love: '#b52240',
    gold: '#b07d10'
  }
};

const WEATHER_ICONS = {
  '01d': 'bi-brightness-high-fill',
  '01n': 'bi-brightness-high-fill',
  '02d': 'bi-cloud-sun-fill',
  '02n': 'bi-cloud-sun-fill',
  '03d': 'bi-cloud-fill',
  '03n': 'bi-cloud-fill',
  '04d': 'bi-clouds-fill',
  '04n': 'bi-clouds-fill',
  '09d': 'bi-cloud-rain-fill',
  '09n': 'bi-cloud-rain-fill',
  '10d': 'bi-cloud-rain-heavy-fill',
  '10n': 'bi-cloud-rain-heavy-fill',
  '11d': 'bi-cloud-lightning-rain-fill',
  '11n': 'bi-cloud-lightning-rain-fill',
  '13d': 'bi-cloud-snow-fill',
  '13n': 'bi-cloud-snow-fill',
  '50d': 'bi-cloud-fog-fill',
  '50n': 'bi-cloud-fog-fill'
};


const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GOOGLE_CALENDAR_URL = 'https://www.googleapis.com/calendar/v3';
const REDIRECT_URI = 'http://localhost:3000/callback.html';

let settingsOpen = false;

function getSettings() {
  return {
    
    generalTimeFormat: localStorage.getItem(STORAGE_KEYS.GENERAL_TIME_FORMAT) || '24h',
    generalDateFormat: localStorage.getItem(STORAGE_KEYS.GENERAL_DATE_FORMAT) || 'dd, Do MMM',
    generalSettingsButtonHide: localStorage.getItem(STORAGE_KEYS.GENERAL_SETTINGS_BUTTON_HIDE) === 'true',
    generalTheme: localStorage.getItem(STORAGE_KEYS.GENERAL_THEME) || 'rosepine',
    generalTimeAlign: localStorage.getItem(STORAGE_KEYS.GENERAL_TIME_ALIGN) || 'center',

    weatherUnits: localStorage.getItem(STORAGE_KEYS.WEATHER_UNITS) || 'metric',
    location: localStorage.getItem(STORAGE_KEYS.LOCATION) || 'Worcester',
    weatherApi: localStorage.getItem(STORAGE_KEYS.WEATHER_API) || '',
    weatherForecastDays: localStorage.getItem(STORAGE_KEYS.WEATHER_FORECAST_DAYS) || '3',
    weatherRefreshAmount: parseInt(localStorage.getItem(STORAGE_KEYS.WEATHER_REFRESH_AMOUNT)) || 30,

    googleClientId: localStorage.getItem(STORAGE_KEYS.GOOGLE_CLIENT_ID) || '',
    googleClientSecret: localStorage.getItem(STORAGE_KEYS.GOOGLE_CLIENT_SECRET) || '',
    googleRefreshAmount: localStorage.getItem(STORAGE_KEYS.GOOGLE_REFRESH_AMOUNT) || '10',
    googleEventsAmount: parseInt(localStorage.getItem(STORAGE_KEYS.GOOGLE_EVENTS_AMOUNT)) || 10,
    googleDaysAmount: parseInt(localStorage.getItem(STORAGE_KEYS.GOOGLE_DAYS_AMOUNT)) || 14,
    selectedCalendars: JSON.parse(localStorage.getItem(STORAGE_KEYS.SELECTED_CALENDARS)) || [],
    calendarIcons: JSON.parse(localStorage.getItem(STORAGE_KEYS.CALENDAR_ICONS)) || {}
  };
}

function updateOpenSettingsColor() {
  const settings = getSettings();
  const openSettingsSvg = document.querySelector('#open-settings svg');
  if (openSettingsSvg) {
    if (settings.generalSettingsButtonHide) {
      openSettingsSvg.style.color = 'var(--color-base)';
    } else {
      openSettingsSvg.style.color = 'var(--color-muted)';
    }
  }
}

function applyTheme(themeName) {
  const theme = THEMES[themeName] || THEMES.rosepine;
  const root = document.documentElement;
  
  root.style.setProperty('--color-base', theme.base);
  root.style.setProperty('--color-surface', theme.surface);
  root.style.setProperty('--color-overlay', theme.overlay);
  root.style.setProperty('--color-muted', theme.muted);
  root.style.setProperty('--color-subtle', theme.subtle);
  root.style.setProperty('--color-text', theme.text);
  root.style.setProperty('--color-love', theme.love);
  root.style.setProperty('--color-gold', theme.gold);
}

function applyTimeAlign() {
  const settings = getSettings();
  document.documentElement.style.setProperty('--time-align', settings.generalTimeAlign);
}

function saveSettings() {
  localStorage.setItem(STORAGE_KEYS.GENERAL_TIME_FORMAT, document.getElementById('general-time-format').value);
  localStorage.setItem(STORAGE_KEYS.GENERAL_DATE_FORMAT, document.getElementById('general-date-format').value);
  localStorage.setItem(STORAGE_KEYS.GENERAL_SETTINGS_BUTTON_HIDE, document.getElementById('general-settings-button-hide').checked);
  localStorage.setItem(STORAGE_KEYS.GENERAL_THEME, document.getElementById('general-theme').value);
  localStorage.setItem(STORAGE_KEYS.GENERAL_TIME_ALIGN, document.getElementById('general-time-align').value);

  localStorage.setItem(STORAGE_KEYS.WEATHER_UNITS, document.getElementById('weather-units').value);
  localStorage.setItem(STORAGE_KEYS.LOCATION, document.getElementById('location-input').value);
  localStorage.setItem(STORAGE_KEYS.WEATHER_API, document.getElementById('weather-api-input').value);
  localStorage.setItem(STORAGE_KEYS.WEATHER_FORECAST_DAYS, document.getElementById('weather-forecast-days').value);
  localStorage.setItem(STORAGE_KEYS.WEATHER_REFRESH_AMOUNT, document.getElementById('weather-refresh-amount').value);

  localStorage.setItem(STORAGE_KEYS.GOOGLE_CLIENT_ID, document.getElementById('google-client-id').value);
  localStorage.setItem(STORAGE_KEYS.GOOGLE_CLIENT_SECRET, document.getElementById('google-client-secret').value);
  localStorage.setItem(STORAGE_KEYS.GOOGLE_REFRESH_AMOUNT, document.getElementById('google-refresh-amount').value);
  localStorage.setItem(STORAGE_KEYS.GOOGLE_EVENTS_AMOUNT, document.getElementById('google-events-amount').value);
  localStorage.setItem(STORAGE_KEYS.GOOGLE_DAYS_AMOUNT, document.getElementById('google-days-amount').value);
  
  const selectedIds = [];
  document.querySelectorAll('#calendar-list input[type="checkbox"]:checked').forEach(cb => {
    selectedIds.push(cb.value);
  });
  localStorage.setItem(STORAGE_KEYS.SELECTED_CALENDARS, JSON.stringify(selectedIds));
  
  const calendarIcons = {};
  document.querySelectorAll('#calendar-list input[type="text"][id^="calendar-icon-"]').forEach(input => {
    const calendarId = input.id.replace('calendar-icon-', '');
    if (input.value) {
      calendarIcons[calendarId] = input.value;
    }
  });
  localStorage.setItem(STORAGE_KEYS.CALENDAR_ICONS, JSON.stringify(calendarIcons));
  
  closeSettings();
  fetchWeather();
  updateOpenSettingsColor();
  restartWeatherInterval();
  restartCalendarInterval();
  applyTheme(document.getElementById('general-theme').value);
  applyTimeAlign();
}

function loadSettings() {
  const settings = getSettings();
  document.getElementById('general-time-format').value = settings.generalTimeFormat;
  document.getElementById('general-date-format').value = settings.generalDateFormat;
  document.getElementById('general-settings-button-hide').checked = settings.generalSettingsButtonHide;
  document.getElementById('general-theme').value = settings.generalTheme;
  document.getElementById('general-time-align').value = settings.generalTimeAlign;

  document.getElementById('weather-units').value = settings.weatherUnits;
  document.getElementById('location-input').value = settings.location;
  document.getElementById('weather-api-input').value = settings.weatherApi;
  document.getElementById('weather-forecast-days').value = settings.weatherForecastDays;
  document.getElementById('weather-refresh-amount').value = settings.weatherRefreshAmount;

  document.getElementById('google-client-id').value = settings.googleClientId;
  document.getElementById('google-client-secret').value = settings.googleClientSecret;
  document.getElementById('google-refresh-amount').value = settings.googleRefreshAmount;
  document.getElementById('google-events-amount').value = settings.googleEventsAmount;
  document.getElementById('google-days-amount').value = settings.googleDaysAmount;
}

function clearData() {
  Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
  location.reload();
}

function openSettings() {
  loadSettings();
  document.querySelector('.moodle-settings').classList.add('moodle-settings-visible');
  document.querySelector('.moodle-overlay').classList.add('is-open');
  settingsOpen = true;
  
  const accessToken = localStorage.getItem(STORAGE_KEYS.GOOGLE_ACCESS_TOKEN);
  if (accessToken) {
    fetchCalendarList();
  }
}

function closeSettings() {
  document.querySelector('.moodle-settings').classList.remove('moodle-settings-visible');
  document.querySelector('.moodle-overlay').classList.remove('is-open');
  settingsOpen = false;
}

function getWeatherIconSvg(iconCode) {
  const iconClass = WEATHER_ICONS[iconCode] || 'bi-cloud-fill';
  return `<i class="bi ${iconClass}" style="font-size: 8rem;"></i>`;
}

function getSmallWeatherIconSvg(iconCode) {
  const iconClass = WEATHER_ICONS[iconCode] || 'bi-cloud-fill';
  return `<i class="bi ${iconClass}" style="font-size: 4rem;"></i>`;
}

async function fetchWeather() {
  const settings = getSettings();
  if (!settings.weatherApi || !settings.location) {
    console.log('Weather API key or location not set');
    return;
  }

  try {
    const currentResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(settings.location)}&appid=${settings.weatherApi}&units=${settings.weatherUnits}`
    );
    const currentData = await currentResponse.json();

    if (currentData.cod === 200) {
      document.getElementById('weather-temp').textContent = `${Math.round(currentData.main.temp)}${settings.weatherUnits === 'metric' ? '°C' : '°F'}`;
      document.getElementById('weather-desc').textContent = currentData.weather[0].description;
      document.getElementById('weather-current-icon').innerHTML = getWeatherIconSvg(currentData.weather[0].icon);
    }

    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(settings.location)}&appid=${settings.weatherApi}&units=${settings.weatherUnits}`
    );
    const forecastData = await forecastResponse.json();

    if (forecastData.cod === '200') {
      const dailyForecasts = {};
      forecastData.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const dayKey = date.toISOString().split('T')[0];
        if (!dailyForecasts[dayKey]) {
          dailyForecasts[dayKey] = item;
        }
      });

      const days = Object.keys(dailyForecasts).slice(1, parseInt(settings.weatherForecastDays) + 1);
      const forecastContainer = document.getElementById('weather-forecast');
      forecastContainer.innerHTML = '';

      days.forEach((day, index) => {
        const forecast = dailyForecasts[day];
        const date = new Date(forecast.dt * 1000);
        const dayName = date.toLocaleDateString('en-UK', { weekday: 'short' });
        const temp = Math.round(forecast.main.temp);
        const icon = forecast.weather[0].icon;

        const dayHtml = `
          <div class="forecast-day">
            <div class="forecast-date">${dayName}</div>
            <div class="forecast-icon">${getSmallWeatherIconSvg(icon)}</div>
            <div class="forecast-temp">${temp}${settings.weatherUnits === 'metric' ? '°C' : '°F'}</div>
          </div>
        `;
        forecastContainer.innerHTML += dayHtml;

        if (index < days.length - 1) {
          forecastContainer.innerHTML += '<div class="forecast-line"></div>';
        }
      });
    }
  } catch (error) {
    console.error('Error fetching weather:', error);
  }
}

function updateTimeDate() {
  const now = new Date();
  const settings = getSettings();
  
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  let timeStr;
  
  if (settings.generalTimeFormat === '12h') {
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    timeStr = `${hours}:${minutes} ${ampm}`;
  } else {
    timeStr = `${hours.toString().padStart(2, '0')}:${minutes}`;
  }
  
  document.getElementById('time').textContent = timeStr;

  document.getElementById('date').textContent = formatDate(now, settings.generalDateFormat);
}

function formatDate(date, format) {
  const dayNamesShort = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const dayNamesAbbr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayNamesFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthNamesFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  const dayOfWeek = date.getDay();
  const dayOfMonth = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const quarter = Math.ceil(month / 3);
  
  const getOrdinal = (n) => {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };
  
  const dayOfYear = Math.floor((date - new Date(year, 0, 0)) / (1000 * 60 * 60 * 24));
  const weekOfYear = Math.ceil((dayOfYear + new Date(year, 0, 1).getDay() + 1) / 7);
  
  const replacements = {
    'dddd': dayNamesFull[dayOfWeek],
    'ddd': dayNamesAbbr[dayOfWeek],
    'dd': dayNamesShort[dayOfWeek],
    'd': dayOfWeek,
    'YYYY': year,
    'YY': year.toString().slice(-2),
    'MMMM': monthNamesFull[month - 1],
    'MMM': monthNamesShort[month - 1],
    'MM': month.toString().padStart(2, '0'),
    'M': month,
    'Qo': quarter + getOrdinal(quarter),
    'Q': quarter,
    'DDDD': dayOfYear.toString().padStart(3, '0'),
    'DDDo': dayOfYear + getOrdinal(dayOfYear),
    'DDD': dayOfYear,
    'DD': dayOfMonth.toString().padStart(2, '0'),
    'Do': dayOfMonth + getOrdinal(dayOfMonth),
    'D': dayOfMonth,
    'ww': weekOfYear.toString().padStart(2, '0'),
    'wo': weekOfYear + getOrdinal(weekOfYear),
    'w': weekOfYear
  };
  
  let result = format;
  const tokenRegex = /dddd|ddd|dd|YYYY|YY|MMMM|MMM|MM|M|Qo|Q|DDDD|DDDo|DDD|DD|Do|D|ww|wo|w/gi;
  result = result.replace(tokenRegex, (match) => {
    return replacements[match] !== undefined ? replacements[match] : match;
  });
   
  return result;
}

function startGoogleAuth() {
  const settings = getSettings();
  if (!settings.googleClientId) {
    alert('Please enter your Google Client ID in settings');
    return;
  }

  const scopes = ['https://www.googleapis.com/auth/calendar.readonly'];
  const authUrl = new URL(GOOGLE_AUTH_URL);
  authUrl.searchParams.set('client_id', settings.googleClientId);
  authUrl.searchParams.set('redirect_uri', REDIRECT_URI);
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('scope', scopes.join(' '));
  authUrl.searchParams.set('access_type', 'offline');
  authUrl.searchParams.set('prompt', 'consent');

  window.location.href = authUrl.toString();
}

async function refreshGoogleToken() {
  const refreshToken = localStorage.getItem(STORAGE_KEYS.GOOGLE_REFRESH_TOKEN);
  const settings = getSettings();
  
  if (!refreshToken || !settings.googleClientId || !settings.googleClientSecret) {
    return false;
  }

  try {
    const params = new URLSearchParams();
    params.set('client_id', settings.googleClientId);
    params.set('client_secret', settings.googleClientSecret);
    params.set('refresh_token', refreshToken);
    params.set('grant_type', 'refresh_token');

    const response = await fetch(GOOGLE_TOKEN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem(STORAGE_KEYS.GOOGLE_ACCESS_TOKEN, data.access_token);
      return true;
    }
  } catch (error) {
    console.error('Error refreshing token:', error);
  }
   
  return false;
}

async function fetchCalendarList() {
  const accessToken = localStorage.getItem(STORAGE_KEYS.GOOGLE_ACCESS_TOKEN);
  if (!accessToken) {
    alert('Please sign in with Google first');
    return;
  }

  try {
    const response = await fetch(
      `${GOOGLE_CALENDAR_URL}/users/me/calendarList`,
      {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      }
    );

    if (response.status === 401) {
      const refreshed = await refreshGoogleToken();
      if (refreshed) {
        await fetchCalendarList();
        return;
      } else {
        showCalendarAuthButton();
        return;
      }
    }

    const data = await response.json();
    renderCalendarSettings(data.items || []);
  } catch (error) {
    console.error('Error fetching calendar list:', error);
    alert('Failed to fetch calendar list');
  }
}

function renderCalendarSettings(calendars) {
  const container = document.getElementById('calendar-list');
  const settings = getSettings();
  const selectedIds = settings.selectedCalendars;
  const calendarIcons = settings.calendarIcons;

  container.innerHTML = '';

  calendars.forEach(calendar => {
    const isChecked = selectedIds.length === 0 || selectedIds.includes(calendar.id);
    const savedIcon = calendarIcons[calendar.id] || '';
    
    const itemHtml = `
      <div class="calendar-item">
        <div>
          <input type="checkbox" name="calendar-${calendar.id}" id="calendar-${calendar.id}" value="${calendar.id}" ${isChecked ? 'checked' : ''}>
          <label for="calendar-${calendar.id}">${calendar.summary}</label>
        </div>
        <div class="calendar-icon-container">
          <label for="calendar-icon-${calendar.id}">Icon:</label>
          <input type="text" name="calendar-icon-input" id="calendar-icon-${calendar.id}" placeholder="bi-calendar" value="${savedIcon}">
        </div>
      </div>
    `;
    container.innerHTML += itemHtml;
  });
}

async function fetchCalendarEvents() {
  const accessToken = localStorage.getItem(STORAGE_KEYS.GOOGLE_ACCESS_TOKEN);
  if (!accessToken) {
    showCalendarAuthButton();
    return;
  }

  const settings = getSettings();
  let calendarIds = settings.selectedCalendars;
  
  if (calendarIds.length === 0) {
    calendarIds = ['primary'];
  }

  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + settings.googleDaysAmount);

  const timeMin = startOfDay.toISOString();
  const timeMax = endOfDay.toISOString();

  try {
    const allEvents = [];
    
    for (const calendarId of calendarIds) {
      const response = await fetch(
        `${GOOGLE_CALENDAR_URL}/calendars/${encodeURIComponent(calendarId)}/events?timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime`,
        {
          headers: { 'Authorization': `Bearer ${accessToken}` }
        }
      );

      if (response.status === 401) {
        const refreshed = await refreshGoogleToken();
        if (refreshed) {
          await fetchCalendarEvents();
          return;
        } else {
          showCalendarAuthButton();
          return;
        }
      }

      const data = await response.json();
      if (data.items) {
        data.items.forEach(event => {
          event.calendarId = calendarId;
          allEvents.push(event);
        });
      }
    }
    
    allEvents.sort((a, b) => {
      const startA = new Date(a.start.dateTime || a.start.date);
      const startB = new Date(b.start.dateTime || b.start.date);
      return startA - startB;
    });
    
    const maxEvents = settings.googleEventsAmount;
    const eventsToShow = allEvents.slice(0, maxEvents);
    
    renderCalendarEvents(eventsToShow);
  } catch (error) {
    console.error('Error fetching calendar:', error);
    showCalendarAuthButton();
  }
}

function showCalendarAuthButton() {
  const calendarCard = document.getElementById('calendar-card');
  calendarCard.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; padding: 40px;">
      <p style="margin-bottom: 20px; color: #666;">Connect your Google Calendar</p>
      <button id="google-auth-btn" style="padding: 12px 24px; font-size: 16px; cursor: pointer; background: #4285f4; color: white; border: none; border-radius: 4px;">
        Sign in with Google
      </button>
    </div>
  `;
  document.getElementById('google-auth-btn').addEventListener('click', startGoogleAuth);
}

function renderCalendarEvents(events) {
  const calendarCard = document.getElementById('calendar-card');
  calendarCard.innerHTML = '';

  const settings = getSettings();
  const calendarIcons = settings.calendarIcons;

  const eventsByDate = {};
  events.forEach(event => {
    const start = event.start.dateTime || event.start.date;
    const dateKey = start.split('T')[0];
    if (!eventsByDate[dateKey]) {
      eventsByDate[dateKey] = [];
    }
    eventsByDate[dateKey].push(event);
  });

  const sortedDates = Object.keys(eventsByDate).sort().slice(0, 7);

  sortedDates.forEach(dateKey => {
    const date = new Date(dateKey);
    const dayOfMonth = date.getDate();
    const dayOfWeek = date.toLocaleDateString('en-UK', { weekday: 'long' });

    const dayHtml = `
      <div class="calendar-day">
        <div class="calendar-day-details">
          <div class="calendar-dayofmonth">${dayOfMonth}</div>
          <div class="calendar-dayofweek">${dayOfWeek}</div>
        </div>
        <div class="calendar-events">
        </div>
      </div>
    `;
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = dayHtml;
    const dayElement = tempDiv.firstElementChild;
    const eventsContainer = dayElement.querySelector('.calendar-events');

    eventsByDate[dateKey].forEach(event => {
      const start = event.start.dateTime || event.start.date;
      const time = event.start.dateTime ? start.split('T')[1].substring(0, 5) : 'All day';
      const location = event.location || '';
      
      const calendarId = event.calendarId;
      const eventIcon = calendarIcons[calendarId] || 'bi-calendar-fill';
      
      const eventHtml = `
        <div class="calendar-event-item">
        <i class="bi ${eventIcon} calendar-event-item-icon"></i>
          <div class="calendar-event-item-details">
            <div class="calendar-event-item-time">${time}</div>
            <div class="calendar-event-item-title">${event.summary || 'No title'}</div>
            ${location ? `<div class="calendar-event-item-location">${location}</div>` : ''}
          </div>
        </div>
      `;
      eventsContainer.innerHTML += eventHtml;
    });

    calendarCard.appendChild(dayElement);
  });

  if (sortedDates.length === 0) {
    calendarCard.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; height: 100%; padding: 40px; color: #666;">
        No upcoming events
      </div>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('open-settings').addEventListener('click', openSettings);
  document.getElementById('close-settings').addEventListener('click', closeSettings);
  document.getElementById('save-settings').addEventListener('click', saveSettings);
  document.getElementById('clear-data').addEventListener('click', clearData);
  document.getElementById('google-refresh-now').addEventListener('click', () => {
    const btn = document.getElementById('google-refresh-now');
    
    btn.disabled = true;
    btn.textContent = 'Refreshing...';
    btn.style.backgroundColor = 'var(--color-base)';
    
    fetchCalendarEvents().finally(() => {
      btn.disabled = false;
      btn.textContent = 'Synced!';
      btn.style.backgroundColor = '';
      
      setTimeout(() => {
        btn.textContent = 'Refresh now';
      }, 2000);
    });
  });

  document.getElementById('calendar-get').addEventListener('click', async () => {
    const btn = document.getElementById('calendar-get');
    
    btn.disabled = true;
    btn.style.opacity = '0.5';
    
    await fetchCalendarList();
    
    btn.disabled = false;
    btn.style.opacity = '1';
  });

  document.querySelectorAll('.tab-show-info').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      const hiddenInfo = btn.nextElementSibling;
      if (hiddenInfo && hiddenInfo.classList.contains('tab-hidden-info')) {
        hiddenInfo.classList.toggle('show');
      }
    });
  });

  updateOpenSettingsColor();
  applyTheme(getSettings().generalTheme);
  applyTimeAlign();

  updateTimeDate();
  setInterval(updateTimeDate, 1000);

  fetchWeather();
  startWeatherInterval();

  fetchCalendarEvents();
  startCalendarInterval();
});

let weatherIntervalId = null;

function startWeatherInterval() {
  const settings = getSettings();
  const intervalMs = settings.weatherRefreshAmount * 60 * 1000;
  
  if (weatherIntervalId) {
    clearInterval(weatherIntervalId);
  }
  
  weatherIntervalId = setInterval(fetchWeather, intervalMs);
}

function restartWeatherInterval() {
  startWeatherInterval();
}

let calendarIntervalId = null;

function startCalendarInterval() {
  const settings = getSettings();
  const intervalMs = parseInt(settings.googleRefreshAmount) * 60 * 1000;
  
  if (calendarIntervalId) {
    clearInterval(calendarIntervalId);
  }
  
  calendarIntervalId = setInterval(fetchCalendarEvents, intervalMs);
}

function restartCalendarInterval() {
  startCalendarInterval();
}

if (localStorage.getItem(STORAGE_KEYS.GOOGLE_ACCESS_TOKEN)) {
  fetchCalendarEvents();
}

function openSetting(evt, settingName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(settingName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();