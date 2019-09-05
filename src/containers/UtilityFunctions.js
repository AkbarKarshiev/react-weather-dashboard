export default class UtilityFunctions {
    // Function to change first letters of the wrods to uppercase in input string
    // Input: 'some string' => OutpuT: 'Some String'
    convertToTitleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(' ');
    }

    // Function to change first letters of the wrods to uppercase in input string with slash
    // Input: 'some-string' => OutpuT: 'Some String'
    formatPossibility(str) {
        str = str.toLowerCase().split('-');
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(' ');
    }

    //Function to convert unix timestamp to Human readable time format
    //Input: "Asia/Tashkent", 1567605674 => Output: {fulltime: "Wed, Sep 4, 2019 7:01 PM", onlyMonthDate: "Sep 4", onlyTime: "7:01 PM"}
    unixToHuman(timezone, timestamp) {
        var moment = require('moment-timezone'); // for handling date & time
        var decipher = new Date(timestamp * 1000);
        var human = moment(decipher)
          .tz(timezone)
          .format('llll');
        var timeArray = human.split(' ');
        var timeNumeral = timeArray[4];
        var timeSuffix = timeArray[5];
        var justTime = timeNumeral + ' ' + timeSuffix;
        var monthDateArray = human.split(',');
        var monthDate = monthDateArray[1].trim();
        return {
          fullTime: human,
          onlyTime: justTime,
          onlyMonthDate: monthDate
        };
    }

    //Function to convert temperature in Fahranheit to Celcius
    // Input: 77 (F) => OutpuT: 25 (C)
    fahToCel(tempInFahrenheit) {
        var tempInCelcius = Math.round((5 / 9) * (tempInFahrenheit - 32));
        return tempInCelcius;
    }

    //Function to convert pressure in Millibar to KPA
    // Input: 760 (millibar) => OutpuT: 76 (KPa)
    milibarToKiloPascal(pressureInMilibar) {
        var pressureInKPA = pressureInMilibar * 0.1;
        return Math.round(pressureInKPA);
    }

    //Function to convert length in Mile to Km
    // Input: 1 (mile) => OutpuT: 1.60934 (km)
    mileToKilometer(miles) {
        var kilometer = miles * 1.60934;
        return Math.round(kilometer);
    }

    //Function to convert direction from degree to NWSE
    // Input: 25 (degree) => Output: 'N' (NWSE)
    deriveWindDir(windDir) {
        var wind_directions_array = [
          { minVal: 0, maxVal: 30, direction: 'N' },
          { minVal: 31, maxVal: 45, direction: 'NNE' },
          { minVal: 46, maxVal: 75, direction: 'NE' },
          { minVal: 76, maxVal: 90, direction: 'ENE' },
          { minVal: 91, maxVal: 120, direction: 'E' },
          { minVal: 121, maxVal: 135, direction: 'ESE' },
          { minVal: 136, maxVal: 165, direction: 'SE' },
          { minVal: 166, maxVal: 180, direction: 'SSE' },
          { minVal: 181, maxVal: 210, direction: 'S' },
          { minVal: 211, maxVal: 225, direction: 'SSW' },
          { minVal: 226, maxVal: 255, direction: 'SW' },
          { minVal: 256, maxVal: 270, direction: 'WSW' },
          { minVal: 271, maxVal: 300, direction: 'W' },
          { minVal: 301, maxVal: 315, direction: 'WNW' },
          { minVal: 316, maxVal: 345, direction: 'NW' },
          { minVal: 346, maxVal: 360, direction: 'NNW' }
        ];
        var wind_direction = '';
        for (var i = 0; i < wind_directions_array.length; i++) {
          if (
            windDir >= wind_directions_array[i].minVal &&
            windDir <= wind_directions_array[i].maxVal
          ) {
            wind_direction = wind_directions_array[i].direction;
          }
        }
        return wind_direction;
    }
}