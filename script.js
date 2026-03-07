const STORAGE_KEYS = {
  LOCATION: 'dashboard_location',
  WEATHER_API: 'dashboard_weather_api',
  GOOGLE_CLIENT_ID: 'dashboard_google_client_id',
  GOOGLE_CLIENT_SECRET: 'dashboard_google_client_secret',
  GOOGLE_ACCESS_TOKEN: 'dashboard_google_access_token',
  GOOGLE_REFRESH_TOKEN: 'dashboard_google_refresh_token'
};

const WEATHER_ICONS = {
  '01d': 'bi-brightness-high-fill',
  '01n': 'bi-moon-stars-fill',
  '02d': 'bi-cloud-sun-fill',
  '02n': 'bi-cloud-moon-fill',
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
  '50d': 'bi-cloud-sleet-fill',
  '50n': 'bi-cloud-sleet-fill'
};

const WEATHER_SVG = {
  'bi-brightness-high-fill': '<path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>',
  'bi-moon-stars-fill': '<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278M4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>',
  'bi-cloud-sun-fill': '<path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z"/><path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708zm1.734 3.374a2 2 0 1 1 3.296 2.198q.3.423.516.898a3 3 0 1 0-4.84-3.225q.529.017 1.028.129m4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377M14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>',
  'bi-cloud-moon-fill': '<path d="M11..98 10c--1.22.27-.59-3-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4"/>',
  'bi-cloud-fill': '<path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383"/>',
  'bi-clouds-fill': '<path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383"/>',
  'bi-cloud-rain-fill': '<path d="M4.176 11.032a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 0 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293m3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 0 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293m3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 0 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293m3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 0 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293m.229-7.005a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973"/>',
  'bi-cloud-rain-heavy-fill': '<path d="M4.176 11.032a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 0 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293m3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 0 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293m3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 0 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293m3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 0 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293m.229-7.005a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973"/>',
  'bi-cloud-lightning-rain-fill': '<path d="M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316m9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316m-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316m9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316m-7.105-1.25A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724zm6.352-7.249a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973"/>',
  'bi-cloud-snow-fill': '<path d="M2.625 11.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m2.75 2a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m5.5 0a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 0 1-.5 0v-.57l-.501.287a.25.25 0 1 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m-2.75-2a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m5.5 0a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 0 1-.5 0v-.57l-.501.287a.25.25 0 1 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m-.22-7.223a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10.25H13a3 3 0 0 0 .405-5.973"/>',
  'bi-cloud-sleet-fill': '<path d="M2.375 13.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 1 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 1 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m1.849-2.447a.5.5 0 0 1 .223.67l-.5 1a.5.5 0 0 1-.894-.447l.5-1a.5.5 0 0 1 .67-.223zM6.375 13.5a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 1 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 1 1-.248-.434l.495-.283-.495-.283a.25.25 0 1 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m1.849-2.447a.5.5 0 0 1 .223.67l-.5 1a.5.5 0 0 1-.894-.447l.5-1a.5.5 0 0 1 .67-.223zm2.151 2.447a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 1 1-.248.434l-.501-.286v.569a.25.25 0 0 1-.5 0v-.57l-.501.287a.25.25 0 1 1-.248-.434l.495-.283-.495-.283a.25.25 0 1 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m1.849-2.447a.5.5 0 0 1 .223.67l-.5 1a.5.5 0 1 1-.894-.447l.5-1a.5.5 0 0 1 .67-.223zm1.181-7.026a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973"/>'
};

const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GOOGLE_CALENDAR_URL = 'https://www.googleapis.com/calendar/v3';
const REDIRECT_URI = 'http://localhost:3000/callback.html';

let settingsOpen = false;

function getSettings() {
  return {
    generalUnits: localStorage.getItem(STORAGE_KEYS.GENERAL_UNITS) || 'metric',
    generalTimeFormat: localStorage.getItem(STORAGE_KEYS.GENERAL_TIME_FORMAT) || '24h',
    generalDateFormat: localStorage.getItem(STORAGE_KEYS.GENERAL_DATE_FORMAT) || 'dd, Do MMM',
    generalSettingsButtonHide: localStorage.getItem(STORAGE_KEYS.GENERAL_SETTINGS_BUTTON_HIDE) === 'false',
    location: localStorage.getItem(STORAGE_KEYS.LOCATION) || 'Worcester',
    weatherApi: localStorage.getItem(STORAGE_KEYS.WEATHER_API) || '',
    googleClientId: localStorage.getItem(STORAGE_KEYS.GOOGLE_CLIENT_ID) || '',
    googleClientSecret: localStorage.getItem(STORAGE_KEYS.GOOGLE_CLIENT_SECRET) || ''
  };
}

function saveSettings() {
  localStorage.setItem(STORAGE_KEYS.GENERAL_UNITS, document.getElementById('general-units').value);
  localStorage.setItem(STORAGE_KEYS.GENERAL_TIME_FORMAT, document.getElementById('general-time-format').value);
  localStorage.setItem(STORAGE_KEYS.GENERAL_DATE_FORMAT, document.getElementById('general-date-format').value);
  localStorage.setItem(STORAGE_KEYS.GENERAL_SETTINGS_BUTTON_HIDE, document.getElementById('general-settings-button-hide').checked);
  localStorage.setItem(STORAGE_KEYS.LOCATION, document.getElementById('location-input').value);
  localStorage.setItem(STORAGE_KEYS.WEATHER_API, document.getElementById('weather-api-input').value);
  localStorage.setItem(STORAGE_KEYS.GOOGLE_CLIENT_ID, document.getElementById('google-client-id').value);
  localStorage.setItem(STORAGE_KEYS.GOOGLE_CLIENT_SECRET, document.getElementById('google-client-secret').value);
  
  closeSettings();
  fetchWeather();
}

function loadSettings() {
  const settings = getSettings();
  document.getElementById('general-units').value = settings.generalUnits;
  document.getElementById('general-time-format').value = settings.generalTimeFormat;
  document.getElementById('general-date-format').value = settings.generalDateFormat;
  document.getElementById('general-settings-button-hide').checked = settings.generalSettingsButtonHide;
  document.getElementById('location-input').value = settings.location;
  document.getElementById('weather-api-input').value = settings.weatherApi;
  document.getElementById('google-client-id').value = settings.googleClientId;
  document.getElementById('google-client-secret').value = settings.googleClientSecret;
}

function clearData() {
  Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
  location.reload();
}

function openSettings() {
  loadSettings();
  document.querySelector('.moodle-settings').classList.add('moodle-settings-visible');
  settingsOpen = true;
}

function closeSettings() {
  document.querySelector('.moodle-settings').classList.remove('moodle-settings-visible');
  settingsOpen = false;
}

function getWeatherIconSvg(iconCode) {
  const iconClass = WEATHER_ICONS[iconCode] || 'bi-cloud-fill';
  const path = WEATHER_SVG[iconClass] || WEATHER_SVG['bi-cloud-fill'];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="currentColor" class="bi ${iconClass}" viewBox="0 0 16 16">${path}</svg>`;
}

function getSmallWeatherIconSvg(iconCode) {
  const iconClass = WEATHER_ICONS[iconCode] || 'bi-cloud-fill';
  const path = WEATHER_SVG[iconClass] || WEATHER_SVG['bi-cloud-fill'];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi ${iconClass}" viewBox="0 0 16 16">${path}</svg>`;
}

async function fetchWeather() {
  const settings = getSettings();
  if (!settings.weatherApi || !settings.location) {
    console.log('Weather API key or location not set');
    return;
  }

  try {
    const currentResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(settings.location)}&appid=${settings.weatherApi}&units=metric`
    );
    const currentData = await currentResponse.json();

    if (currentData.cod === 200) {
      document.getElementById('weather-temp').textContent = `${Math.round(currentData.main.temp)}°C`;
      document.getElementById('weather-desc').textContent = currentData.weather[0].description;
      document.getElementById('weather-current-icon').innerHTML = getWeatherIconSvg(currentData.weather[0].icon);
    }

    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(settings.location)}&appid=${settings.weatherApi}&units=metric`
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

      const days = Object.keys(dailyForecasts).slice(1, 4);
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
            <div class="forecast-temp">${temp}°C</div>
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
  
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  document.getElementById('time').textContent = `${hours}:${minutes}`;

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const day = dayNames[now.getDay()];
  const dateNum = now.getDate();
  const ordinal = getOrdinal(dateNum);
  const month = now.toLocaleDateString('en-US', { month: 'short' });
  document.getElementById('date').textContent = `${day}, ${dateNum}${ordinal} ${month}`;
}

function getOrdinal(n) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
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

async function fetchCalendarEvents() {
  const accessToken = localStorage.getItem(STORAGE_KEYS.GOOGLE_ACCESS_TOKEN);
  if (!accessToken) {
    showCalendarAuthButton();
    return;
  }

  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 14);

  const timeMin = startOfDay.toISOString();
  const timeMax = endOfDay.toISOString();

  try {
    const response = await fetch(
      `${GOOGLE_CALENDAR_URL}/calendars/primary/events?timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime`,
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
    renderCalendarEvents(data.items || []);
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
      
      const eventHtml = `
        <div class="calendar-event-item">
          <div class="calendar-event-item-time">${time}</div>
          <div class="calendar-event-item-title">${event.summary || 'No title'}</div>
          ${location ? `<div class="calendar-event-item-location">${location}</div>` : ''}
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

  document.querySelectorAll('.moodle-show-info').forEach(btn => {
    btn.addEventListener('click', () => {
      const hiddenInfo = btn.querySelector('.moodle-hidden-info');
      if (hiddenInfo) {
        hiddenInfo.style.display = hiddenInfo.style.display === 'block' ? 'none' : 'block';
      }
    });
  });

  updateTimeDate();
  setInterval(updateTimeDate, 1000);

  fetchWeather();
  setInterval(fetchWeather, 1800000);

  fetchCalendarEvents();
  setInterval(fetchCalendarEvents, 300000);
});

if (localStorage.getItem(STORAGE_KEYS.GOOGLE_ACCESS_TOKEN)) {
  fetchCalendarEvents();
}
