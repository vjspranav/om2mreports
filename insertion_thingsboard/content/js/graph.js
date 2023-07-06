/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 2925.0, "series": [{"data": [[0.0, 5.0], [0.1, 11.0], [0.2, 12.0], [0.3, 13.0], [0.4, 13.0], [0.5, 13.0], [0.6, 14.0], [0.7, 14.0], [0.8, 15.0], [0.9, 15.0], [1.0, 15.0], [1.1, 16.0], [1.2, 16.0], [1.3, 16.0], [1.4, 16.0], [1.5, 17.0], [1.6, 17.0], [1.7, 17.0], [1.8, 17.0], [1.9, 17.0], [2.0, 18.0], [2.1, 18.0], [2.2, 18.0], [2.3, 18.0], [2.4, 18.0], [2.5, 18.0], [2.6, 19.0], [2.7, 19.0], [2.8, 19.0], [2.9, 19.0], [3.0, 19.0], [3.1, 19.0], [3.2, 20.0], [3.3, 20.0], [3.4, 20.0], [3.5, 20.0], [3.6, 20.0], [3.7, 20.0], [3.8, 20.0], [3.9, 20.0], [4.0, 21.0], [4.1, 21.0], [4.2, 21.0], [4.3, 21.0], [4.4, 21.0], [4.5, 21.0], [4.6, 21.0], [4.7, 21.0], [4.8, 22.0], [4.9, 22.0], [5.0, 22.0], [5.1, 22.0], [5.2, 22.0], [5.3, 22.0], [5.4, 22.0], [5.5, 22.0], [5.6, 22.0], [5.7, 22.0], [5.8, 23.0], [5.9, 23.0], [6.0, 23.0], [6.1, 23.0], [6.2, 23.0], [6.3, 23.0], [6.4, 23.0], [6.5, 23.0], [6.6, 23.0], [6.7, 23.0], [6.8, 23.0], [6.9, 24.0], [7.0, 24.0], [7.1, 24.0], [7.2, 24.0], [7.3, 24.0], [7.4, 24.0], [7.5, 24.0], [7.6, 24.0], [7.7, 24.0], [7.8, 24.0], [7.9, 24.0], [8.0, 24.0], [8.1, 24.0], [8.2, 25.0], [8.3, 25.0], [8.4, 25.0], [8.5, 25.0], [8.6, 25.0], [8.7, 25.0], [8.8, 25.0], [8.9, 25.0], [9.0, 25.0], [9.1, 25.0], [9.2, 25.0], [9.3, 25.0], [9.4, 25.0], [9.5, 25.0], [9.6, 25.0], [9.7, 25.0], [9.8, 25.0], [9.9, 26.0], [10.0, 26.0], [10.1, 26.0], [10.2, 26.0], [10.3, 26.0], [10.4, 26.0], [10.5, 26.0], [10.6, 26.0], [10.7, 26.0], [10.8, 26.0], [10.9, 26.0], [11.0, 26.0], [11.1, 26.0], [11.2, 26.0], [11.3, 26.0], [11.4, 26.0], [11.5, 27.0], [11.6, 27.0], [11.7, 27.0], [11.8, 27.0], [11.9, 27.0], [12.0, 27.0], [12.1, 27.0], [12.2, 27.0], [12.3, 27.0], [12.4, 27.0], [12.5, 27.0], [12.6, 27.0], [12.7, 27.0], [12.8, 27.0], [12.9, 27.0], [13.0, 28.0], [13.1, 28.0], [13.2, 28.0], [13.3, 28.0], [13.4, 28.0], [13.5, 28.0], [13.6, 28.0], [13.7, 28.0], [13.8, 28.0], [13.9, 28.0], [14.0, 28.0], [14.1, 28.0], [14.2, 28.0], [14.3, 28.0], [14.4, 28.0], [14.5, 28.0], [14.6, 29.0], [14.7, 29.0], [14.8, 29.0], [14.9, 29.0], [15.0, 29.0], [15.1, 29.0], [15.2, 29.0], [15.3, 29.0], [15.4, 29.0], [15.5, 29.0], [15.6, 29.0], [15.7, 29.0], [15.8, 29.0], [15.9, 29.0], [16.0, 29.0], [16.1, 29.0], [16.2, 29.0], [16.3, 29.0], [16.4, 30.0], [16.5, 30.0], [16.6, 30.0], [16.7, 30.0], [16.8, 30.0], [16.9, 30.0], [17.0, 30.0], [17.1, 30.0], [17.2, 30.0], [17.3, 30.0], [17.4, 30.0], [17.5, 30.0], [17.6, 30.0], [17.7, 30.0], [17.8, 30.0], [17.9, 30.0], [18.0, 30.0], [18.1, 30.0], [18.2, 30.0], [18.3, 30.0], [18.4, 31.0], [18.5, 31.0], [18.6, 31.0], [18.7, 31.0], [18.8, 31.0], [18.9, 31.0], [19.0, 31.0], [19.1, 31.0], [19.2, 31.0], [19.3, 31.0], [19.4, 31.0], [19.5, 31.0], [19.6, 31.0], [19.7, 31.0], [19.8, 31.0], [19.9, 31.0], [20.0, 31.0], [20.1, 31.0], [20.2, 31.0], [20.3, 32.0], [20.4, 32.0], [20.5, 32.0], [20.6, 32.0], [20.7, 32.0], [20.8, 32.0], [20.9, 32.0], [21.0, 32.0], [21.1, 32.0], [21.2, 32.0], [21.3, 32.0], [21.4, 32.0], [21.5, 32.0], [21.6, 32.0], [21.7, 32.0], [21.8, 32.0], [21.9, 32.0], [22.0, 32.0], [22.1, 32.0], [22.2, 32.0], [22.3, 32.0], [22.4, 33.0], [22.5, 33.0], [22.6, 33.0], [22.7, 33.0], [22.8, 33.0], [22.9, 33.0], [23.0, 33.0], [23.1, 33.0], [23.2, 33.0], [23.3, 33.0], [23.4, 33.0], [23.5, 33.0], [23.6, 33.0], [23.7, 33.0], [23.8, 33.0], [23.9, 33.0], [24.0, 33.0], [24.1, 33.0], [24.2, 33.0], [24.3, 33.0], [24.4, 33.0], [24.5, 33.0], [24.6, 33.0], [24.7, 33.0], [24.8, 33.0], [24.9, 33.0], [25.0, 34.0], [25.1, 34.0], [25.2, 34.0], [25.3, 34.0], [25.4, 34.0], [25.5, 34.0], [25.6, 34.0], [25.7, 34.0], [25.8, 34.0], [25.9, 34.0], [26.0, 34.0], [26.1, 34.0], [26.2, 34.0], [26.3, 34.0], [26.4, 34.0], [26.5, 34.0], [26.6, 34.0], [26.7, 34.0], [26.8, 34.0], [26.9, 34.0], [27.0, 34.0], [27.1, 34.0], [27.2, 34.0], [27.3, 35.0], [27.4, 35.0], [27.5, 35.0], [27.6, 35.0], [27.7, 35.0], [27.8, 35.0], [27.9, 35.0], [28.0, 35.0], [28.1, 35.0], [28.2, 35.0], [28.3, 35.0], [28.4, 35.0], [28.5, 35.0], [28.6, 35.0], [28.7, 35.0], [28.8, 35.0], [28.9, 35.0], [29.0, 35.0], [29.1, 35.0], [29.2, 35.0], [29.3, 35.0], [29.4, 35.0], [29.5, 35.0], [29.6, 35.0], [29.7, 35.0], [29.8, 36.0], [29.9, 36.0], [30.0, 36.0], [30.1, 36.0], [30.2, 36.0], [30.3, 36.0], [30.4, 36.0], [30.5, 36.0], [30.6, 36.0], [30.7, 36.0], [30.8, 36.0], [30.9, 36.0], [31.0, 36.0], [31.1, 36.0], [31.2, 36.0], [31.3, 36.0], [31.4, 36.0], [31.5, 36.0], [31.6, 36.0], [31.7, 36.0], [31.8, 36.0], [31.9, 36.0], [32.0, 36.0], [32.1, 36.0], [32.2, 36.0], [32.3, 36.0], [32.4, 36.0], [32.5, 36.0], [32.6, 36.0], [32.7, 37.0], [32.8, 37.0], [32.9, 37.0], [33.0, 37.0], [33.1, 37.0], [33.2, 37.0], [33.3, 37.0], [33.4, 37.0], [33.5, 37.0], [33.6, 37.0], [33.7, 37.0], [33.8, 37.0], [33.9, 37.0], [34.0, 37.0], [34.1, 37.0], [34.2, 37.0], [34.3, 37.0], [34.4, 37.0], [34.5, 37.0], [34.6, 37.0], [34.7, 37.0], [34.8, 37.0], [34.9, 37.0], [35.0, 37.0], [35.1, 37.0], [35.2, 37.0], [35.3, 37.0], [35.4, 37.0], [35.5, 38.0], [35.6, 38.0], [35.7, 38.0], [35.8, 38.0], [35.9, 38.0], [36.0, 38.0], [36.1, 38.0], [36.2, 38.0], [36.3, 38.0], [36.4, 38.0], [36.5, 38.0], [36.6, 38.0], [36.7, 38.0], [36.8, 38.0], [36.9, 38.0], [37.0, 38.0], [37.1, 38.0], [37.2, 38.0], [37.3, 38.0], [37.4, 38.0], [37.5, 38.0], [37.6, 38.0], [37.7, 38.0], [37.8, 38.0], [37.9, 39.0], [38.0, 39.0], [38.1, 39.0], [38.2, 39.0], [38.3, 39.0], [38.4, 39.0], [38.5, 39.0], [38.6, 39.0], [38.7, 39.0], [38.8, 39.0], [38.9, 39.0], [39.0, 39.0], [39.1, 39.0], [39.2, 39.0], [39.3, 39.0], [39.4, 39.0], [39.5, 39.0], [39.6, 39.0], [39.7, 39.0], [39.8, 39.0], [39.9, 39.0], [40.0, 39.0], [40.1, 39.0], [40.2, 39.0], [40.3, 39.0], [40.4, 39.0], [40.5, 40.0], [40.6, 40.0], [40.7, 40.0], [40.8, 40.0], [40.9, 40.0], [41.0, 40.0], [41.1, 40.0], [41.2, 40.0], [41.3, 40.0], [41.4, 40.0], [41.5, 40.0], [41.6, 40.0], [41.7, 40.0], [41.8, 40.0], [41.9, 40.0], [42.0, 40.0], [42.1, 40.0], [42.2, 40.0], [42.3, 40.0], [42.4, 40.0], [42.5, 40.0], [42.6, 40.0], [42.7, 40.0], [42.8, 40.0], [42.9, 40.0], [43.0, 40.0], [43.1, 41.0], [43.2, 41.0], [43.3, 41.0], [43.4, 41.0], [43.5, 41.0], [43.6, 41.0], [43.7, 41.0], [43.8, 41.0], [43.9, 41.0], [44.0, 41.0], [44.1, 41.0], [44.2, 41.0], [44.3, 41.0], [44.4, 41.0], [44.5, 41.0], [44.6, 41.0], [44.7, 41.0], [44.8, 41.0], [44.9, 41.0], [45.0, 41.0], [45.1, 41.0], [45.2, 41.0], [45.3, 42.0], [45.4, 42.0], [45.5, 42.0], [45.6, 42.0], [45.7, 42.0], [45.8, 42.0], [45.9, 42.0], [46.0, 42.0], [46.1, 42.0], [46.2, 42.0], [46.3, 42.0], [46.4, 42.0], [46.5, 42.0], [46.6, 42.0], [46.7, 42.0], [46.8, 42.0], [46.9, 42.0], [47.0, 42.0], [47.1, 42.0], [47.2, 42.0], [47.3, 42.0], [47.4, 42.0], [47.5, 43.0], [47.6, 43.0], [47.7, 43.0], [47.8, 43.0], [47.9, 43.0], [48.0, 43.0], [48.1, 43.0], [48.2, 43.0], [48.3, 43.0], [48.4, 43.0], [48.5, 43.0], [48.6, 43.0], [48.7, 43.0], [48.8, 43.0], [48.9, 43.0], [49.0, 43.0], [49.1, 43.0], [49.2, 43.0], [49.3, 43.0], [49.4, 43.0], [49.5, 43.0], [49.6, 43.0], [49.7, 43.0], [49.8, 44.0], [49.9, 44.0], [50.0, 44.0], [50.1, 44.0], [50.2, 44.0], [50.3, 44.0], [50.4, 44.0], [50.5, 44.0], [50.6, 44.0], [50.7, 44.0], [50.8, 44.0], [50.9, 44.0], [51.0, 44.0], [51.1, 44.0], [51.2, 44.0], [51.3, 44.0], [51.4, 44.0], [51.5, 44.0], [51.6, 44.0], [51.7, 44.0], [51.8, 44.0], [51.9, 45.0], [52.0, 45.0], [52.1, 45.0], [52.2, 45.0], [52.3, 45.0], [52.4, 45.0], [52.5, 45.0], [52.6, 45.0], [52.7, 45.0], [52.8, 45.0], [52.9, 45.0], [53.0, 45.0], [53.1, 45.0], [53.2, 45.0], [53.3, 45.0], [53.4, 45.0], [53.5, 45.0], [53.6, 45.0], [53.7, 46.0], [53.8, 46.0], [53.9, 46.0], [54.0, 46.0], [54.1, 46.0], [54.2, 46.0], [54.3, 46.0], [54.4, 46.0], [54.5, 46.0], [54.6, 46.0], [54.7, 46.0], [54.8, 46.0], [54.9, 46.0], [55.0, 46.0], [55.1, 46.0], [55.2, 46.0], [55.3, 46.0], [55.4, 46.0], [55.5, 46.0], [55.6, 47.0], [55.7, 47.0], [55.8, 47.0], [55.9, 47.0], [56.0, 47.0], [56.1, 47.0], [56.2, 47.0], [56.3, 47.0], [56.4, 47.0], [56.5, 47.0], [56.6, 47.0], [56.7, 47.0], [56.8, 47.0], [56.9, 47.0], [57.0, 47.0], [57.1, 47.0], [57.2, 47.0], [57.3, 47.0], [57.4, 47.0], [57.5, 48.0], [57.6, 48.0], [57.7, 48.0], [57.8, 48.0], [57.9, 48.0], [58.0, 48.0], [58.1, 48.0], [58.2, 48.0], [58.3, 48.0], [58.4, 48.0], [58.5, 48.0], [58.6, 48.0], [58.7, 48.0], [58.8, 48.0], [58.9, 48.0], [59.0, 48.0], [59.1, 48.0], [59.2, 48.0], [59.3, 49.0], [59.4, 49.0], [59.5, 49.0], [59.6, 49.0], [59.7, 49.0], [59.8, 49.0], [59.9, 49.0], [60.0, 49.0], [60.1, 49.0], [60.2, 49.0], [60.3, 49.0], [60.4, 49.0], [60.5, 49.0], [60.6, 49.0], [60.7, 49.0], [60.8, 49.0], [60.9, 49.0], [61.0, 49.0], [61.1, 49.0], [61.2, 50.0], [61.3, 50.0], [61.4, 50.0], [61.5, 50.0], [61.6, 50.0], [61.7, 50.0], [61.8, 50.0], [61.9, 50.0], [62.0, 50.0], [62.1, 50.0], [62.2, 50.0], [62.3, 50.0], [62.4, 50.0], [62.5, 50.0], [62.6, 50.0], [62.7, 50.0], [62.8, 50.0], [62.9, 50.0], [63.0, 50.0], [63.1, 50.0], [63.2, 50.0], [63.3, 50.0], [63.4, 50.0], [63.5, 50.0], [63.6, 50.0], [63.7, 50.0], [63.8, 51.0], [63.9, 51.0], [64.0, 51.0], [64.1, 51.0], [64.2, 51.0], [64.3, 51.0], [64.4, 51.0], [64.5, 51.0], [64.6, 51.0], [64.7, 51.0], [64.8, 51.0], [64.9, 51.0], [65.0, 51.0], [65.1, 51.0], [65.2, 51.0], [65.3, 51.0], [65.4, 51.0], [65.5, 52.0], [65.6, 52.0], [65.7, 52.0], [65.8, 52.0], [65.9, 52.0], [66.0, 52.0], [66.1, 52.0], [66.2, 52.0], [66.3, 52.0], [66.4, 52.0], [66.5, 52.0], [66.6, 52.0], [66.7, 52.0], [66.8, 52.0], [66.9, 53.0], [67.0, 53.0], [67.1, 53.0], [67.2, 53.0], [67.3, 53.0], [67.4, 53.0], [67.5, 53.0], [67.6, 53.0], [67.7, 53.0], [67.8, 53.0], [67.9, 53.0], [68.0, 53.0], [68.1, 53.0], [68.2, 54.0], [68.3, 54.0], [68.4, 54.0], [68.5, 54.0], [68.6, 54.0], [68.7, 54.0], [68.8, 54.0], [68.9, 54.0], [69.0, 54.0], [69.1, 54.0], [69.2, 54.0], [69.3, 55.0], [69.4, 55.0], [69.5, 55.0], [69.6, 55.0], [69.7, 55.0], [69.8, 55.0], [69.9, 55.0], [70.0, 55.0], [70.1, 55.0], [70.2, 55.0], [70.3, 56.0], [70.4, 56.0], [70.5, 56.0], [70.6, 56.0], [70.7, 56.0], [70.8, 56.0], [70.9, 56.0], [71.0, 56.0], [71.1, 57.0], [71.2, 57.0], [71.3, 57.0], [71.4, 57.0], [71.5, 57.0], [71.6, 57.0], [71.7, 57.0], [71.8, 58.0], [71.9, 58.0], [72.0, 58.0], [72.1, 58.0], [72.2, 58.0], [72.3, 59.0], [72.4, 59.0], [72.5, 59.0], [72.6, 59.0], [72.7, 60.0], [72.8, 60.0], [72.9, 60.0], [73.0, 61.0], [73.1, 61.0], [73.2, 62.0], [73.3, 62.0], [73.4, 63.0], [73.5, 64.0], [73.6, 65.0], [73.7, 65.0], [73.8, 66.0], [73.9, 67.0], [74.0, 68.0], [74.1, 69.0], [74.2, 70.0], [74.3, 71.0], [74.4, 72.0], [74.5, 74.0], [74.6, 75.0], [74.7, 76.0], [74.8, 78.0], [74.9, 79.0], [75.0, 80.0], [75.1, 82.0], [75.2, 83.0], [75.3, 85.0], [75.4, 86.0], [75.5, 88.0], [75.6, 89.0], [75.7, 90.0], [75.8, 92.0], [75.9, 93.0], [76.0, 95.0], [76.1, 96.0], [76.2, 98.0], [76.3, 100.0], [76.4, 101.0], [76.5, 103.0], [76.6, 104.0], [76.7, 106.0], [76.8, 108.0], [76.9, 109.0], [77.0, 111.0], [77.1, 112.0], [77.2, 113.0], [77.3, 113.0], [77.4, 114.0], [77.5, 114.0], [77.6, 115.0], [77.7, 115.0], [77.8, 116.0], [77.9, 116.0], [78.0, 117.0], [78.1, 117.0], [78.2, 118.0], [78.3, 118.0], [78.4, 119.0], [78.5, 119.0], [78.6, 120.0], [78.7, 121.0], [78.8, 121.0], [78.9, 122.0], [79.0, 122.0], [79.1, 123.0], [79.2, 123.0], [79.3, 124.0], [79.4, 124.0], [79.5, 125.0], [79.6, 126.0], [79.7, 126.0], [79.8, 127.0], [79.9, 128.0], [80.0, 128.0], [80.1, 129.0], [80.2, 130.0], [80.3, 131.0], [80.4, 132.0], [80.5, 133.0], [80.6, 134.0], [80.7, 135.0], [80.8, 136.0], [80.9, 138.0], [81.0, 139.0], [81.1, 140.0], [81.2, 142.0], [81.3, 143.0], [81.4, 144.0], [81.5, 145.0], [81.6, 146.0], [81.7, 146.0], [81.8, 146.0], [81.9, 146.0], [82.0, 147.0], [82.1, 147.0], [82.2, 147.0], [82.3, 147.0], [82.4, 148.0], [82.5, 148.0], [82.6, 148.0], [82.7, 148.0], [82.8, 149.0], [82.9, 149.0], [83.0, 149.0], [83.1, 149.0], [83.2, 149.0], [83.3, 149.0], [83.4, 149.0], [83.5, 149.0], [83.6, 149.0], [83.7, 149.0], [83.8, 149.0], [83.9, 149.0], [84.0, 149.0], [84.1, 149.0], [84.2, 149.0], [84.3, 149.0], [84.4, 149.0], [84.5, 149.0], [84.6, 149.0], [84.7, 149.0], [84.8, 149.0], [84.9, 149.0], [85.0, 149.0], [85.1, 149.0], [85.2, 149.0], [85.3, 149.0], [85.4, 149.0], [85.5, 149.0], [85.6, 149.0], [85.7, 149.0], [85.8, 149.0], [85.9, 149.0], [86.0, 149.0], [86.1, 149.0], [86.2, 149.0], [86.3, 149.0], [86.4, 149.0], [86.5, 150.0], [86.6, 150.0], [86.7, 150.0], [86.8, 150.0], [86.9, 150.0], [87.0, 150.0], [87.1, 150.0], [87.2, 150.0], [87.3, 150.0], [87.4, 150.0], [87.5, 150.0], [87.6, 150.0], [87.7, 150.0], [87.8, 150.0], [87.9, 150.0], [88.0, 150.0], [88.1, 150.0], [88.2, 150.0], [88.3, 150.0], [88.4, 150.0], [88.5, 150.0], [88.6, 150.0], [88.7, 150.0], [88.8, 150.0], [88.9, 150.0], [89.0, 150.0], [89.1, 150.0], [89.2, 150.0], [89.3, 150.0], [89.4, 150.0], [89.5, 150.0], [89.6, 150.0], [89.7, 150.0], [89.8, 150.0], [89.9, 150.0], [90.0, 150.0], [90.1, 150.0], [90.2, 150.0], [90.3, 150.0], [90.4, 150.0], [90.5, 150.0], [90.6, 150.0], [90.7, 150.0], [90.8, 150.0], [90.9, 150.0], [91.0, 151.0], [91.1, 151.0], [91.2, 151.0], [91.3, 151.0], [91.4, 151.0], [91.5, 151.0], [91.6, 151.0], [91.7, 151.0], [91.8, 152.0], [91.9, 152.0], [92.0, 152.0], [92.1, 152.0], [92.2, 153.0], [92.3, 153.0], [92.4, 153.0], [92.5, 154.0], [92.6, 156.0], [92.7, 158.0], [92.8, 159.0], [92.9, 161.0], [93.0, 163.0], [93.1, 166.0], [93.2, 167.0], [93.3, 169.0], [93.4, 169.0], [93.5, 170.0], [93.6, 170.0], [93.7, 171.0], [93.8, 172.0], [93.9, 174.0], [94.0, 175.0], [94.1, 175.0], [94.2, 176.0], [94.3, 178.0], [94.4, 179.0], [94.5, 179.0], [94.6, 180.0], [94.7, 180.0], [94.8, 180.0], [94.9, 182.0], [95.0, 184.0], [95.1, 189.0], [95.2, 192.0], [95.3, 193.0], [95.4, 194.0], [95.5, 194.0], [95.6, 194.0], [95.7, 194.0], [95.8, 194.0], [95.9, 194.0], [96.0, 195.0], [96.1, 195.0], [96.2, 195.0], [96.3, 195.0], [96.4, 195.0], [96.5, 196.0], [96.6, 198.0], [96.7, 201.0], [96.8, 204.0], [96.9, 208.0], [97.0, 214.0], [97.1, 221.0], [97.2, 228.0], [97.3, 236.0], [97.4, 239.0], [97.5, 239.0], [97.6, 240.0], [97.7, 241.0], [97.8, 243.0], [97.9, 249.0], [98.0, 255.0], [98.1, 256.0], [98.2, 257.0], [98.3, 259.0], [98.4, 261.0], [98.5, 266.0], [98.6, 275.0], [98.7, 278.0], [98.8, 281.0], [98.9, 290.0], [99.0, 298.0], [99.1, 301.0], [99.2, 303.0], [99.3, 305.0], [99.4, 312.0], [99.5, 319.0], [99.6, 327.0], [99.7, 348.0], [99.8, 386.0], [99.9, 571.0]], "isOverall": false, "label": "create cin", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 642418.0, "series": [{"data": [[0.0, 642418.0], [600.0, 38.0], [700.0, 48.0], [2700.0, 14.0], [2800.0, 4.0], [2900.0, 7.0], [200.0, 20182.0], [800.0, 29.0], [900.0, 13.0], [1000.0, 542.0], [1100.0, 86.0], [300.0, 6563.0], [1200.0, 47.0], [100.0, 171290.0], [400.0, 629.0], [1600.0, 1.0], [500.0, 113.0]], "isOverall": false, "label": "create cin", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 26.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 841082.0, "series": [{"data": [[0.0, 841082.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 916.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 26.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 5.459944751381211, "minX": 1.6884918E12, "maxY": 25.0, "series": [{"data": [[1.68849222E12, 23.425506664232216], [1.68849402E12, 25.0], [1.68849624E12, 21.460792951541865], [1.68849342E12, 25.0], [1.68849564E12, 25.0], [1.6884936E12, 25.0], [1.68849522E12, 25.0], [1.688493E12, 25.0], [1.68849462E12, 25.0], [1.68849642E12, 21.192175875616563], [1.68849258E12, 25.0], [1.6884948E12, 25.0], [1.68849204E12, 21.706393912441868], [1.6884942E12, 25.0], [1.68849582E12, 25.0], [1.68849246E12, 25.0], [1.68849378E12, 25.0], [1.688496E12, 23.378013044711242], [1.68849318E12, 25.0], [1.6884954E12, 25.0], [1.68849306E12, 25.0], [1.68849528E12, 25.0], [1.6884963E12, 7.777918300240275], [1.68849468E12, 25.0], [1.68849216E12, 21.747306188614534], [1.68849264E12, 25.0], [1.68849198E12, 21.525768409323103], [1.68849426E12, 25.0], [1.68849648E12, 15.757208825038441], [1.68849366E12, 25.0], [1.68849588E12, 25.0], [1.68849546E12, 25.0], [1.68849384E12, 25.0], [1.68849324E12, 25.0], [1.68849486E12, 25.0], [1.68849282E12, 25.0], [1.68849504E12, 25.0], [1.6884918E12, 7.54256854256855], [1.68849444E12, 25.0], [1.68849606E12, 11.376582278481012], [1.6884924E12, 23.085919299226557], [1.68849432E12, 25.0], [1.68849594E12, 25.0], [1.68849252E12, 25.0], [1.68849534E12, 25.0], [1.68849372E12, 25.0], [1.6884933E12, 25.0], [1.68849552E12, 25.0], [1.68849654E12, 23.19374097255658], [1.6884927E12, 25.0], [1.68849492E12, 25.0], [1.68849192E12, 16.827139874739096], [1.68849288E12, 25.0], [1.6884945E12, 25.0], [1.68849234E12, 10.784357105674134], [1.6884939E12, 25.0], [1.68849612E12, 9.935979971387676], [1.6884957E12, 25.0], [1.68849408E12, 25.0], [1.68849348E12, 25.0], [1.6884951E12, 25.0], [1.68849336E12, 25.0], [1.68849498E12, 25.0], [1.68849276E12, 25.0], [1.68849186E12, 23.512342846655088], [1.68849438E12, 25.0], [1.6884966E12, 5.459944751381211], [1.68849456E12, 25.0], [1.68849618E12, 23.33413550536842], [1.68849228E12, 10.027610441767015], [1.68849558E12, 25.0], [1.68849396E12, 25.0], [1.68849354E12, 25.0], [1.68849576E12, 25.0], [1.68849294E12, 25.0], [1.68849516E12, 25.0], [1.68849312E12, 25.0], [1.68849474E12, 25.0], [1.6884921E12, 8.003454231433514], [1.68849414E12, 25.0], [1.68849636E12, 21.298952660242975]], "isOverall": false, "label": "OM2M-Insertion Testing", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6884966E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 45.7910014513788, "minX": 1.0, "maxY": 74.08243992606299, "series": [{"data": [[2.0, 48.67552775605942], [3.0, 50.84912652196938], [4.0, 49.19656786271448], [5.0, 47.41831027377095], [6.0, 47.35822427508341], [7.0, 60.47228381374723], [8.0, 57.50353917500602], [9.0, 52.916784774245755], [10.0, 58.27519068647106], [11.0, 58.48421475970242], [12.0, 55.13315779574952], [13.0, 56.12983630952379], [14.0, 49.65588752196845], [15.0, 62.049888724035505], [1.0, 45.7910014513788], [16.0, 68.11598138091551], [17.0, 55.31429064549526], [18.0, 64.79941327466098], [19.0, 74.08243992606299], [20.0, 56.252005347593546], [21.0, 62.37600685518431], [22.0, 68.32663941709615], [23.0, 59.92142974798223], [24.0, 71.06581703910634], [25.0, 72.0710747793645]], "isOverall": false, "label": "create cin", "isController": false}, {"data": [[23.642728710819704, 70.39099360588254]], "isOverall": false, "label": "create cin-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 25.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 4261.95, "minX": 1.6884918E12, "maxY": 104875.63333333333, "series": [{"data": [[1.68849222E12, 67367.1], [1.68849402E12, 67723.8], [1.68849624E12, 69802.5], [1.68849342E12, 67643.85], [1.68849564E12, 67416.3], [1.6884936E12, 67680.75], [1.68849522E12, 67028.85], [1.688493E12, 68357.25], [1.68849462E12, 68043.6], [1.68849642E12, 73572.45], [1.68849258E12, 67397.85], [1.6884948E12, 67582.35], [1.68849204E12, 62231.85], [1.6884942E12, 68535.6], [1.68849582E12, 68154.3], [1.68849246E12, 67311.75], [1.68849378E12, 66174.0], [1.688496E12, 65060.85], [1.68849318E12, 68191.2], [1.6884954E12, 67766.85], [1.68849306E12, 68511.0], [1.68849528E12, 68836.95], [1.6884963E12, 48628.05], [1.68849468E12, 66936.6], [1.68849216E12, 64495.05], [1.68849264E12, 68351.1], [1.68849198E12, 66229.35], [1.68849426E12, 68720.1], [1.68849648E12, 59931.75], [1.68849366E12, 67828.35], [1.68849588E12, 67742.25], [1.68849546E12, 67877.55], [1.68849384E12, 67527.0], [1.68849324E12, 67699.2], [1.68849486E12, 67723.8], [1.68849282E12, 67668.45], [1.68849504E12, 67539.3], [1.6884918E12, 4261.95], [1.68849444E12, 68418.75], [1.68849606E12, 48585.0], [1.6884924E12, 65995.65], [1.68849432E12, 68437.2], [1.68849594E12, 68763.15], [1.68849252E12, 69187.5], [1.68849534E12, 67422.45], [1.68849372E12, 68172.75], [1.6884933E12, 68830.8], [1.68849552E12, 68572.5], [1.68849654E12, 63867.75], [1.6884927E12, 66985.8], [1.68849492E12, 67545.45], [1.68849192E12, 44187.75], [1.68849288E12, 69082.95], [1.6884945E12, 68209.65], [1.68849234E12, 47256.6], [1.6884939E12, 67084.2], [1.68849612E12, 34390.8], [1.6884957E12, 67760.7], [1.68849408E12, 68824.65], [1.68849348E12, 67650.0], [1.6884951E12, 67354.8], [1.68849336E12, 67121.1], [1.68849498E12, 67705.35], [1.68849276E12, 69556.5], [1.68849186E12, 67016.55], [1.68849438E12, 67170.3], [1.6884966E12, 4452.6], [1.68849456E12, 66930.45], [1.68849618E12, 66444.6], [1.68849228E12, 36752.4], [1.68849558E12, 67945.2], [1.68849396E12, 68203.5], [1.68849354E12, 68400.3], [1.68849576E12, 68578.65], [1.68849294E12, 68781.6], [1.68849516E12, 69322.8], [1.68849312E12, 67816.05], [1.68849474E12, 66555.3], [1.6884921E12, 35608.5], [1.68849414E12, 68547.9], [1.68849636E12, 73400.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68849222E12, 96030.06666666667], [1.68849402E12, 96538.53333333334], [1.68849624E12, 99501.66666666667], [1.68849342E12, 96424.56666666667], [1.68849564E12, 96100.2], [1.6884936E12, 96477.16666666667], [1.68849522E12, 95547.9], [1.688493E12, 97441.5], [1.68849462E12, 96994.4], [1.68849642E12, 104875.63333333333], [1.68849258E12, 96073.9], [1.6884948E12, 96336.9], [1.68849204E12, 88709.9], [1.6884942E12, 97695.73333333334], [1.68849582E12, 97152.2], [1.68849246E12, 95951.16666666667], [1.68849378E12, 94329.33333333333], [1.688496E12, 92742.56666666667], [1.68849318E12, 97204.8], [1.6884954E12, 96599.9], [1.68849306E12, 97660.66666666667], [1.68849528E12, 98125.3], [1.6884963E12, 69318.03333333334], [1.68849468E12, 95416.4], [1.68849216E12, 91936.03333333334], [1.68849264E12, 97432.73333333334], [1.68849198E12, 94408.23333333334], [1.68849426E12, 97958.73333333334], [1.68849648E12, 85431.16666666667], [1.68849366E12, 96687.56666666667], [1.68849588E12, 96564.83333333333], [1.68849546E12, 96757.7], [1.68849384E12, 96258.0], [1.68849324E12, 96503.46666666666], [1.68849486E12, 96538.53333333334], [1.68849282E12, 96459.63333333333], [1.68849504E12, 96275.53333333334], [1.6884918E12, 6075.3], [1.68849444E12, 97529.16666666667], [1.68849606E12, 69256.66666666667], [1.6884924E12, 94075.1], [1.68849432E12, 97555.46666666666], [1.68849594E12, 98020.1], [1.68849252E12, 98625.0], [1.68849534E12, 96108.96666666666], [1.68849372E12, 97178.5], [1.6884933E12, 98116.53333333334], [1.68849552E12, 97748.33333333333], [1.68849654E12, 91041.83333333333], [1.6884927E12, 95486.53333333334], [1.68849492E12, 96284.3], [1.68849192E12, 62988.5], [1.68849288E12, 98475.96666666666], [1.6884945E12, 97231.1], [1.68849234E12, 67363.06666666667], [1.6884939E12, 95626.8], [1.68849612E12, 49023.2], [1.6884957E12, 96591.13333333333], [1.68849408E12, 98107.76666666666], [1.68849348E12, 96433.33333333333], [1.6884951E12, 96012.53333333334], [1.68849336E12, 95679.4], [1.68849498E12, 96512.23333333334], [1.68849276E12, 99151.0], [1.68849186E12, 95530.36666666667], [1.68849438E12, 95749.53333333334], [1.6884966E12, 6347.066666666667], [1.68849456E12, 95407.63333333333], [1.68849618E12, 94715.06666666667], [1.68849228E12, 52389.6], [1.68849558E12, 96854.13333333333], [1.68849396E12, 97222.33333333333], [1.68849354E12, 97502.86666666667], [1.68849576E12, 97757.1], [1.68849294E12, 98046.4], [1.68849516E12, 98817.86666666667], [1.68849312E12, 96670.03333333334], [1.68849474E12, 94872.86666666667], [1.6884921E12, 50759.0], [1.68849414E12, 97713.26666666666], [1.68849636E12, 104630.16666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6884966E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 41.84504874294499, "minX": 1.6884918E12, "maxY": 78.46421933085495, "series": [{"data": [[1.68849222E12, 68.74630272046785], [1.68849402E12, 73.62677079549613], [1.68849624E12, 51.9725991189427], [1.68849342E12, 72.83498499863609], [1.68849564E12, 72.88058748403604], [1.6884936E12, 72.21272149023169], [1.68849522E12, 77.25029819249465], [1.688493E12, 72.57192982456111], [1.68849462E12, 71.29817425885788], [1.68849642E12, 42.66931371729496], [1.68849258E12, 77.83493019436045], [1.6884948E12, 76.63163163163166], [1.68849204E12, 75.76163652534807], [1.6884942E12, 69.99398779612348], [1.68849582E12, 70.78117668290923], [1.68849246E12, 74.12873458200146], [1.68849378E12, 78.46421933085495], [1.688496E12, 77.01899990547336], [1.68849318E12, 71.92045454545409], [1.6884954E12, 72.05762773391383], [1.68849306E12, 70.95260323159735], [1.68849528E12, 68.77048155096925], [1.6884963E12, 43.20538763121272], [1.68849468E12, 78.01571113561207], [1.68849216E12, 69.8028034709642], [1.68849264E12, 68.92711894907316], [1.68849198E12, 67.96118488253254], [1.68849426E12, 72.63799892607818], [1.68849648E12, 41.84504874294499], [1.68849366E12, 73.18804968718827], [1.68849588E12, 73.50985020426711], [1.68849546E12, 75.05091963395866], [1.68849384E12, 71.42377049180334], [1.68849324E12, 77.76053779069721], [1.68849486E12, 74.37649836541982], [1.68849282E12, 72.377351631373], [1.68849504E12, 73.05572755417984], [1.6884918E12, 77.70995670995667], [1.68849444E12, 73.9798651685392], [1.68849606E12, 60.400506329113995], [1.6884924E12, 71.8587270524653], [1.68849432E12, 72.10046728972024], [1.68849594E12, 68.37116536982379], [1.68849252E12, 69.09493333333364], [1.68849534E12, 75.84776064945747], [1.68849372E12, 68.74839873703166], [1.6884933E12, 68.29101143674099], [1.68849552E12, 70.76699551569517], [1.68849654E12, 72.91815117958566], [1.6884927E12, 76.44711715020185], [1.68849492E12, 72.87507966857896], [1.68849192E12, 74.62588726513545], [1.68849288E12, 69.60313362414365], [1.6884945E12, 70.77152646289832], [1.68849234E12, 63.188443519000565], [1.6884939E12, 76.51494316098284], [1.68849612E12, 63.79649499284699], [1.6884957E12, 71.71410419313891], [1.68849408E12, 68.35734072022171], [1.68849348E12, 72.94900000000038], [1.6884951E12, 75.89828341855346], [1.68849336E12, 73.50485614806666], [1.68849498E12, 76.64783359069821], [1.68849276E12, 65.21467727674661], [1.68849186E12, 69.72873267871918], [1.68849438E12, 77.13633034242812], [1.6884966E12, 60.33149171270711], [1.68849456E12, 78.21685197096433], [1.68849618E12, 71.68428359866769], [1.68849228E12, 57.72991967871479], [1.68849558E12, 70.78394279507565], [1.68849396E12, 69.04346257889995], [1.68849354E12, 69.88248516453869], [1.68849576E12, 73.69724688368754], [1.68849294E12, 70.8501430615166], [1.68849516E12, 68.86337828246964], [1.68849312E12, 75.12505667906053], [1.68849474E12, 76.71816669746828], [1.6884921E12, 54.84645941278065], [1.68849414E12, 71.1066750403732], [1.68849636E12, 43.85839966485119]], "isOverall": false, "label": "create cin", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6884966E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 41.84289379168799, "minX": 1.6884918E12, "maxY": 78.46282527881097, "series": [{"data": [[1.68849222E12, 68.7441117400039], [1.68849402E12, 73.62404649473304], [1.68849624E12, 51.96995594713658], [1.68849342E12, 72.83162105645972], [1.68849564E12, 72.8782156540782], [1.6884936E12, 72.21090413448442], [1.68849522E12, 77.24736214331585], [1.688493E12, 72.56968061178587], [1.68849462E12, 71.2954627621112], [1.68849642E12, 42.667391122627826], [1.68849258E12, 77.832831462725], [1.6884948E12, 76.6292656292655], [1.68849204E12, 75.76025298942584], [1.6884942E12, 69.99165470208207], [1.68849582E12, 70.7780184082295], [1.68849246E12, 74.12782092279559], [1.68849378E12, 78.46282527881097], [1.688496E12, 77.01682578693655], [1.68849318E12, 71.91747835497843], [1.6884954E12, 72.05554043016615], [1.68849306E12, 70.95044883303414], [1.68849528E12, 68.7684266952559], [1.6884963E12, 43.20323763753636], [1.68849468E12, 78.0125872840865], [1.68849216E12, 69.80080099170397], [1.68849264E12, 68.92450962749658], [1.68849198E12, 67.95895626334821], [1.68849426E12, 72.63594057633765], [1.68849648E12, 41.84289379168799], [1.68849366E12, 73.18560159579286], [1.68849588E12, 73.50739900136163], [1.68849546E12, 75.04919815167128], [1.68849384E12, 71.42258652094773], [1.68849324E12, 77.75908430232579], [1.68849486E12, 74.37495459498679], [1.68849282E12, 72.37535217667904], [1.68849504E12, 73.05290475323255], [1.6884918E12, 77.70418470418464], [1.68849444E12, 73.97779775280927], [1.68849606E12, 60.39721518987338], [1.6884924E12, 71.85537228590061], [1.68849432E12, 72.09822070452907], [1.68849594E12, 68.36910830873813], [1.68849252E12, 69.09155555555522], [1.68849534E12, 75.84593633129592], [1.68849372E12, 68.74614343707695], [1.6884933E12, 68.2892244460327], [1.68849552E12, 70.764932735426], [1.68849654E12, 72.91574386133853], [1.6884927E12, 76.44463826661756], [1.68849492E12, 72.87316762268952], [1.68849192E12, 74.62352122477364], [1.68849288E12, 69.60144217929347], [1.6884945E12, 70.76990352538114], [1.68849234E12, 63.18584070796475], [1.6884939E12, 76.51246791345798], [1.68849612E12, 63.792739628040195], [1.6884957E12, 71.71138137593061], [1.68849408E12, 68.3548387096776], [1.68849348E12, 72.9473636363639], [1.6884951E12, 75.89481373265193], [1.68849336E12, 73.50137438152814], [1.68849498E12, 76.64447270415086], [1.68849276E12, 65.21246684350119], [1.68849186E12, 69.722492429109], [1.68849438E12, 77.13413294268446], [1.6884966E12, 60.32872928176795], [1.68849456E12, 78.21464669668288], [1.68849618E12, 71.68196964087375], [1.68849228E12, 57.726572958500704], [1.68849558E12, 70.78213251267202], [1.68849396E12, 69.041388638413], [1.68849354E12, 69.87996763172083], [1.68849576E12, 73.69563267868354], [1.68849294E12, 70.84835479256091], [1.68849516E12, 68.86080553584073], [1.68849312E12, 75.1221547111637], [1.68849474E12, 76.71567177970773], [1.6884921E12, 54.84335060449052], [1.68849414E12, 71.10443208325833], [1.68849636E12, 43.856053623795454]], "isOverall": false, "label": "create cin", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6884966E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 4.462707182320442, "minX": 1.6884918E12, "maxY": 18.172026022304838, "series": [{"data": [[1.68849222E12, 12.1714442212891], [1.68849402E12, 11.90664729386126], [1.68849624E12, 10.525903083700461], [1.68849342E12, 11.51095554141285], [1.68849564E12, 14.454570333880705], [1.6884936E12, 13.85224897773737], [1.68849522E12, 14.527296082209421], [1.688493E12, 13.457759784075616], [1.68849462E12, 11.199656543745471], [1.68849642E12, 5.4666053665468635], [1.68849258E12, 14.86349119445212], [1.6884948E12, 14.535899535899595], [1.68849204E12, 13.872220575155637], [1.6884942E12, 15.888998564249796], [1.68849582E12, 14.790019852012263], [1.68849246E12, 15.96208314298769], [1.68849378E12, 18.172026022304838], [1.688496E12, 16.68182247849509], [1.68849318E12, 17.700757575757557], [1.6884954E12, 16.83782557400855], [1.68849306E12, 12.383123877917425], [1.68849528E12, 12.128473152863375], [1.6884963E12, 4.6231187555330715], [1.68849468E12, 15.304208011760362], [1.68849216E12, 18.001048917707617], [1.68849264E12, 11.903635054885772], [1.68849198E12, 14.13000278577405], [1.68849426E12, 16.34938249507784], [1.68849648E12, 4.934940995382248], [1.68849366E12, 15.009701695529932], [1.68849588E12, 17.55161143894692], [1.68849546E12, 15.111986952976334], [1.68849384E12, 14.243351548269565], [1.68849324E12, 15.99863735465113], [1.68849486E12, 12.298038503450789], [1.68849282E12, 14.503953467236194], [1.68849504E12, 12.034237843744323], [1.6884918E12, 8.679653679653665], [1.68849444E12, 15.74921348314608], [1.68849606E12, 10.395316455696264], [1.6884924E12, 14.99394278259246], [1.68849432E12, 15.780014378145207], [1.68849594E12, 12.040783471961396], [1.68849252E12, 15.41866666666665], [1.68849534E12, 15.957493386846608], [1.68849372E12, 15.152007216959827], [1.6884933E12, 12.296193709792691], [1.68849552E12, 14.232466367712977], [1.68849654E12, 13.863553201733168], [1.6884927E12, 14.816470804259962], [1.68849492E12, 14.816807793863198], [1.68849192E12, 12.90716771050798], [1.68849288E12, 13.247752158817807], [1.6884945E12, 16.27499774592013], [1.68849234E12, 10.995835502342493], [1.6884939E12, 15.621562156215603], [1.68849612E12, 11.231938483547957], [1.6884957E12, 13.858685786894158], [1.68849408E12, 12.735412384952141], [1.68849348E12, 15.052363636363669], [1.6884951E12, 15.41544923301677], [1.68849336E12, 15.26488913322336], [1.68849498E12, 14.304568989009008], [1.68849276E12, 12.028205128205135], [1.68849186E12, 15.418739102505288], [1.68849438E12, 11.429866324848941], [1.6884966E12, 4.462707182320442], [1.68849456E12, 12.401176146283206], [1.68849618E12, 15.349037393557838], [1.68849228E12, 9.699297188755068], [1.68849558E12, 12.952932657494584], [1.68849396E12, 15.448872858431054], [1.68849354E12, 12.899568422945459], [1.68849576E12, 14.464980719218008], [1.68849294E12, 14.84513590844065], [1.68849516E12, 13.342086586231373], [1.68849312E12, 15.609050512378715], [1.68849474E12, 13.819719090741051], [1.6884921E12, 7.708635578583762], [1.68849414E12, 14.913870446797075], [1.68849636E12, 6.512023460410553]], "isOverall": false, "label": "create cin", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6884966E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 5.0, "minX": 1.6884918E12, "maxY": 2925.0, "series": [{"data": [[1.68849222E12, 1283.0], [1.68849402E12, 484.0], [1.68849624E12, 2925.0], [1.68849342E12, 323.0], [1.68849564E12, 1121.0], [1.6884936E12, 1084.0], [1.68849522E12, 1066.0], [1.688493E12, 1062.0], [1.68849462E12, 381.0], [1.68849642E12, 1055.0], [1.68849258E12, 1057.0], [1.6884948E12, 343.0], [1.68849204E12, 1055.0], [1.6884942E12, 1212.0], [1.68849582E12, 342.0], [1.68849246E12, 1084.0], [1.68849378E12, 1195.0], [1.688496E12, 1093.0], [1.68849318E12, 1144.0], [1.6884954E12, 1077.0], [1.68849306E12, 383.0], [1.68849528E12, 427.0], [1.6884963E12, 100.0], [1.68849468E12, 1249.0], [1.68849216E12, 1143.0], [1.68849264E12, 427.0], [1.68849198E12, 349.0], [1.68849426E12, 1086.0], [1.68849648E12, 113.0], [1.68849366E12, 1047.0], [1.68849588E12, 1203.0], [1.68849546E12, 1108.0], [1.68849384E12, 1145.0], [1.68849324E12, 1060.0], [1.68849486E12, 1050.0], [1.68849282E12, 1164.0], [1.68849504E12, 1066.0], [1.6884918E12, 403.0], [1.68849444E12, 1058.0], [1.68849606E12, 1056.0], [1.6884924E12, 1055.0], [1.68849432E12, 1052.0], [1.68849594E12, 1154.0], [1.68849252E12, 1075.0], [1.68849534E12, 1122.0], [1.68849372E12, 1083.0], [1.6884933E12, 405.0], [1.68849552E12, 341.0], [1.68849654E12, 1636.0], [1.6884927E12, 1237.0], [1.68849492E12, 1065.0], [1.68849192E12, 757.0], [1.68849288E12, 1067.0], [1.6884945E12, 1250.0], [1.68849234E12, 1052.0], [1.6884939E12, 1226.0], [1.68849612E12, 1068.0], [1.6884957E12, 562.0], [1.68849408E12, 409.0], [1.68849348E12, 1001.0], [1.6884951E12, 875.0], [1.68849336E12, 1225.0], [1.68849498E12, 1104.0], [1.68849276E12, 428.0], [1.68849186E12, 1126.0], [1.68849438E12, 1078.0], [1.6884966E12, 194.0], [1.68849456E12, 559.0], [1.68849618E12, 1109.0], [1.68849228E12, 345.0], [1.68849558E12, 351.0], [1.68849396E12, 1282.0], [1.68849354E12, 440.0], [1.68849576E12, 1067.0], [1.68849294E12, 1068.0], [1.68849516E12, 474.0], [1.68849312E12, 1073.0], [1.68849474E12, 1094.0], [1.6884921E12, 1082.0], [1.68849414E12, 1057.0], [1.68849636E12, 1056.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68849222E12, 150.0], [1.68849402E12, 150.0], [1.68849624E12, 62.0], [1.68849342E12, 152.0], [1.68849564E12, 152.0], [1.6884936E12, 150.0], [1.68849522E12, 153.0], [1.688493E12, 150.0], [1.68849462E12, 150.0], [1.68849642E12, 57.0], [1.68849258E12, 152.0], [1.6884948E12, 151.0], [1.68849204E12, 151.0], [1.6884942E12, 150.0], [1.68849582E12, 151.0], [1.68849246E12, 151.0], [1.68849378E12, 153.0], [1.688496E12, 151.0], [1.68849318E12, 150.0], [1.6884954E12, 151.0], [1.68849306E12, 150.0], [1.68849528E12, 150.0], [1.6884963E12, 54.0], [1.68849468E12, 151.0], [1.68849216E12, 150.0], [1.68849264E12, 150.0], [1.68849198E12, 150.0], [1.68849426E12, 150.0], [1.68849648E12, 56.0], [1.68849366E12, 150.0], [1.68849588E12, 151.0], [1.68849546E12, 150.0], [1.68849384E12, 150.0], [1.68849324E12, 151.0], [1.68849486E12, 151.0], [1.68849282E12, 150.0], [1.68849504E12, 152.0], [1.6884918E12, 150.0], [1.68849444E12, 151.0], [1.68849606E12, 149.0], [1.6884924E12, 150.0], [1.68849432E12, 150.0], [1.68849594E12, 150.0], [1.68849252E12, 150.0], [1.68849534E12, 150.0], [1.68849372E12, 150.0], [1.6884933E12, 150.0], [1.68849552E12, 150.0], [1.68849654E12, 150.0], [1.6884927E12, 153.0], [1.68849492E12, 152.0], [1.68849192E12, 152.0], [1.68849288E12, 150.0], [1.6884945E12, 150.0], [1.68849234E12, 150.0], [1.6884939E12, 151.0], [1.68849612E12, 150.0], [1.6884957E12, 151.0], [1.68849408E12, 150.0], [1.68849348E12, 150.0], [1.6884951E12, 151.0], [1.68849336E12, 151.0], [1.68849498E12, 151.0], [1.68849276E12, 150.0], [1.68849186E12, 150.0], [1.68849438E12, 151.0], [1.6884966E12, 117.0], [1.68849456E12, 153.0], [1.68849618E12, 151.0], [1.68849228E12, 149.0], [1.68849558E12, 150.0], [1.68849396E12, 150.0], [1.68849354E12, 150.0], [1.68849576E12, 151.0], [1.68849294E12, 150.0], [1.68849516E12, 150.0], [1.68849312E12, 151.0], [1.68849474E12, 151.0], [1.6884921E12, 147.0], [1.68849414E12, 151.0], [1.68849636E12, 58.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68849222E12, 273.0], [1.68849402E12, 306.0], [1.68849624E12, 155.0], [1.68849342E12, 302.0], [1.68849564E12, 315.0], [1.6884936E12, 305.0], [1.68849522E12, 301.0], [1.688493E12, 267.84000000000015], [1.68849462E12, 302.0], [1.68849642E12, 84.0], [1.68849258E12, 302.0], [1.6884948E12, 278.0], [1.68849204E12, 319.0], [1.6884942E12, 270.5499999999993], [1.68849582E12, 287.1700000000001], [1.68849246E12, 307.0], [1.68849378E12, 317.0], [1.688496E12, 324.0], [1.68849318E12, 300.0], [1.6884954E12, 295.7999999999993], [1.68849306E12, 300.0], [1.68849528E12, 257.0], [1.6884963E12, 80.0], [1.68849468E12, 319.0], [1.68849216E12, 319.0], [1.68849264E12, 290.85000000000036], [1.68849198E12, 301.0], [1.68849426E12, 300.0], [1.68849648E12, 78.0], [1.68849366E12, 286.0], [1.68849588E12, 288.84000000000015], [1.68849546E12, 303.0], [1.68849384E12, 303.0], [1.68849324E12, 302.0], [1.68849486E12, 288.0], [1.68849282E12, 301.9599999999991], [1.68849504E12, 279.0], [1.6884918E12, 348.0], [1.68849444E12, 280.0], [1.68849606E12, 255.0], [1.6884924E12, 317.0], [1.68849432E12, 303.0], [1.68849594E12, 280.0], [1.68849252E12, 265.0], [1.68849534E12, 299.0], [1.68849372E12, 300.0], [1.6884933E12, 291.0], [1.68849552E12, 280.0], [1.68849654E12, 354.0], [1.6884927E12, 302.0], [1.68849492E12, 317.0], [1.68849192E12, 308.0], [1.68849288E12, 276.65999999999985], [1.6884945E12, 316.0], [1.68849234E12, 282.2999999999993], [1.6884939E12, 305.0], [1.68849612E12, 290.6999999999971], [1.6884957E12, 304.0], [1.68849408E12, 263.0], [1.68849348E12, 277.9899999999998], [1.6884951E12, 300.46999999999935], [1.68849336E12, 300.0], [1.68849498E12, 301.89999999999964], [1.68849276E12, 285.0], [1.68849186E12, 333.02000000000044], [1.68849438E12, 316.0], [1.6884966E12, 188.5], [1.68849456E12, 298.15999999999985], [1.68849618E12, 281.0], [1.68849228E12, 239.0], [1.68849558E12, 300.0], [1.68849396E12, 276.0], [1.68849354E12, 275.5400000000009], [1.68849576E12, 281.0], [1.68849294E12, 297.14999999999964], [1.68849516E12, 281.0], [1.68849312E12, 298.0], [1.68849474E12, 309.77000000000044], [1.6884921E12, 201.0], [1.68849414E12, 278.0], [1.68849636E12, 86.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68849222E12, 184.0], [1.68849402E12, 194.0], [1.68849624E12, 85.0], [1.68849342E12, 195.0], [1.68849564E12, 195.0], [1.6884936E12, 194.0], [1.68849522E12, 195.0], [1.688493E12, 192.0], [1.68849462E12, 194.0], [1.68849642E12, 62.0], [1.68849258E12, 194.0], [1.6884948E12, 194.0], [1.68849204E12, 195.0], [1.6884942E12, 191.0], [1.68849582E12, 187.0], [1.68849246E12, 195.0], [1.68849378E12, 195.0], [1.688496E12, 195.0], [1.68849318E12, 176.0], [1.6884954E12, 195.0], [1.68849306E12, 182.9499999999989], [1.68849528E12, 180.0], [1.6884963E12, 58.0], [1.68849468E12, 194.0], [1.68849216E12, 180.0], [1.68849264E12, 182.0], [1.68849198E12, 174.0], [1.68849426E12, 188.25], [1.68849648E12, 60.0], [1.68849366E12, 194.0], [1.68849588E12, 180.0], [1.68849546E12, 192.0], [1.68849384E12, 194.0], [1.68849324E12, 194.0], [1.68849486E12, 194.0], [1.68849282E12, 180.0], [1.68849504E12, 195.0], [1.6884918E12, 179.0], [1.68849444E12, 184.0], [1.68849606E12, 155.0], [1.6884924E12, 194.39999999999964], [1.68849432E12, 180.0], [1.68849594E12, 194.0], [1.68849252E12, 175.0], [1.68849534E12, 194.0], [1.68849372E12, 180.0], [1.6884933E12, 180.0], [1.68849552E12, 179.0], [1.68849654E12, 195.0], [1.6884927E12, 194.0], [1.68849492E12, 194.0], [1.68849192E12, 195.0], [1.68849288E12, 180.0], [1.6884945E12, 185.39999999999964], [1.68849234E12, 167.0], [1.6884939E12, 195.0], [1.68849612E12, 163.34999999999945], [1.6884957E12, 194.0], [1.68849408E12, 194.0], [1.68849348E12, 194.0], [1.6884951E12, 194.0], [1.68849336E12, 194.0], [1.68849498E12, 192.0], [1.68849276E12, 178.0], [1.68849186E12, 179.0], [1.68849438E12, 194.0], [1.6884966E12, 150.0], [1.68849456E12, 195.0], [1.68849618E12, 194.0], [1.68849228E12, 151.0], [1.68849558E12, 195.0], [1.68849396E12, 176.0], [1.68849354E12, 194.0], [1.68849576E12, 188.0], [1.68849294E12, 180.0], [1.68849516E12, 169.0], [1.68849312E12, 194.0], [1.68849474E12, 195.0], [1.6884921E12, 150.0], [1.68849414E12, 188.0], [1.68849636E12, 64.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.68849222E12, 8.0], [1.68849402E12, 8.0], [1.68849624E12, 9.0], [1.68849342E12, 9.0], [1.68849564E12, 8.0], [1.6884936E12, 10.0], [1.68849522E12, 8.0], [1.688493E12, 8.0], [1.68849462E12, 8.0], [1.68849642E12, 8.0], [1.68849258E12, 8.0], [1.6884948E12, 9.0], [1.68849204E12, 8.0], [1.6884942E12, 9.0], [1.68849582E12, 9.0], [1.68849246E12, 9.0], [1.68849378E12, 9.0], [1.688496E12, 8.0], [1.68849318E12, 8.0], [1.6884954E12, 9.0], [1.68849306E12, 8.0], [1.68849528E12, 9.0], [1.6884963E12, 9.0], [1.68849468E12, 9.0], [1.68849216E12, 8.0], [1.68849264E12, 8.0], [1.68849198E12, 7.0], [1.68849426E12, 9.0], [1.68849648E12, 8.0], [1.68849366E12, 8.0], [1.68849588E12, 8.0], [1.68849546E12, 8.0], [1.68849384E12, 8.0], [1.68849324E12, 11.0], [1.68849486E12, 5.0], [1.68849282E12, 8.0], [1.68849504E12, 10.0], [1.6884918E12, 21.0], [1.68849444E12, 9.0], [1.68849606E12, 8.0], [1.6884924E12, 8.0], [1.68849432E12, 8.0], [1.68849594E12, 8.0], [1.68849252E12, 8.0], [1.68849534E12, 9.0], [1.68849372E12, 9.0], [1.6884933E12, 8.0], [1.68849552E12, 8.0], [1.68849654E12, 8.0], [1.6884927E12, 6.0], [1.68849492E12, 8.0], [1.68849192E12, 8.0], [1.68849288E12, 8.0], [1.6884945E12, 9.0], [1.68849234E12, 8.0], [1.6884939E12, 11.0], [1.68849612E12, 9.0], [1.6884957E12, 8.0], [1.68849408E12, 8.0], [1.68849348E12, 7.0], [1.6884951E12, 8.0], [1.68849336E12, 8.0], [1.68849498E12, 10.0], [1.68849276E12, 8.0], [1.68849186E12, 8.0], [1.68849438E12, 8.0], [1.6884966E12, 24.0], [1.68849456E12, 9.0], [1.68849618E12, 8.0], [1.68849228E12, 10.0], [1.68849558E12, 8.0], [1.68849396E12, 8.0], [1.68849354E12, 8.0], [1.68849576E12, 9.0], [1.68849294E12, 10.0], [1.68849516E12, 8.0], [1.68849312E12, 8.0], [1.68849474E12, 10.0], [1.6884921E12, 8.0], [1.68849414E12, 9.0], [1.68849636E12, 8.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68849222E12, 42.0], [1.68849402E12, 44.0], [1.68849624E12, 41.0], [1.68849342E12, 42.0], [1.68849564E12, 43.0], [1.6884936E12, 43.0], [1.68849522E12, 43.0], [1.688493E12, 44.0], [1.68849462E12, 42.0], [1.68849642E12, 42.0], [1.68849258E12, 45.0], [1.6884948E12, 47.0], [1.68849204E12, 44.0], [1.6884942E12, 41.0], [1.68849582E12, 44.0], [1.68849246E12, 42.0], [1.68849378E12, 43.0], [1.688496E12, 44.0], [1.68849318E12, 45.0], [1.6884954E12, 43.0], [1.68849306E12, 45.0], [1.68849528E12, 43.0], [1.6884963E12, 48.0], [1.68849468E12, 43.0], [1.68849216E12, 41.0], [1.68849264E12, 41.0], [1.68849198E12, 45.0], [1.68849426E12, 46.0], [1.68849648E12, 44.0], [1.68849366E12, 44.0], [1.68849588E12, 40.0], [1.68849546E12, 46.0], [1.68849384E12, 43.0], [1.68849324E12, 45.0], [1.68849486E12, 46.0], [1.68849282E12, 42.0], [1.68849504E12, 43.0], [1.6884918E12, 49.0], [1.68849444E12, 45.0], [1.68849606E12, 46.0], [1.6884924E12, 42.0], [1.68849432E12, 43.0], [1.68849594E12, 43.0], [1.68849252E12, 45.0], [1.68849534E12, 44.0], [1.68849372E12, 41.0], [1.6884933E12, 42.0], [1.68849552E12, 43.0], [1.68849654E12, 43.0], [1.6884927E12, 45.0], [1.68849492E12, 42.0], [1.68849192E12, 49.0], [1.68849288E12, 44.0], [1.6884945E12, 43.0], [1.68849234E12, 47.0], [1.6884939E12, 45.0], [1.68849612E12, 47.0], [1.6884957E12, 44.0], [1.68849408E12, 42.0], [1.68849348E12, 45.0], [1.6884951E12, 45.0], [1.68849336E12, 42.0], [1.68849498E12, 48.0], [1.68849276E12, 40.0], [1.68849186E12, 46.0], [1.68849438E12, 46.0], [1.6884966E12, 50.0], [1.68849456E12, 46.0], [1.68849618E12, 43.0], [1.68849228E12, 41.0], [1.68849558E12, 44.0], [1.68849396E12, 41.0], [1.68849354E12, 40.0], [1.68849576E12, 45.0], [1.68849294E12, 45.0], [1.68849516E12, 44.0], [1.68849312E12, 45.0], [1.68849474E12, 44.0], [1.6884921E12, 44.0], [1.68849414E12, 43.0], [1.68849636E12, 42.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6884966E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 25.0, "minX": 1.0, "maxY": 353.0, "series": [{"data": [[3.0, 322.0], [5.0, 50.0], [6.0, 148.0], [7.0, 42.5], [8.0, 150.0], [9.0, 25.0], [10.0, 125.5], [12.0, 149.5], [13.0, 150.0], [14.0, 150.0], [16.0, 131.0], [17.0, 147.0], [18.0, 149.0], [19.0, 150.0], [20.0, 50.0], [21.0, 152.0], [22.0, 45.5], [23.0, 50.0], [24.0, 151.0], [26.0, 50.0], [27.0, 25.0], [28.0, 150.0], [29.0, 148.0], [30.0, 29.0], [31.0, 45.0], [32.0, 25.0], [33.0, 150.0], [35.0, 150.0], [34.0, 51.0], [36.0, 31.0], [37.0, 50.0], [38.0, 50.0], [40.0, 50.0], [42.0, 148.0], [43.0, 150.0], [45.0, 51.0], [47.0, 162.0], [46.0, 50.0], [48.0, 150.0], [49.0, 150.0], [50.0, 149.0], [51.0, 53.0], [52.0, 52.0], [53.0, 25.0], [55.0, 150.0], [54.0, 126.0], [57.0, 53.0], [56.0, 50.0], [59.0, 112.0], [58.0, 49.0], [60.0, 50.0], [63.0, 79.5], [62.0, 119.5], [65.0, 50.0], [66.0, 149.0], [64.0, 50.0], [67.0, 353.0], [68.0, 50.0], [69.0, 51.0], [70.0, 140.0], [71.0, 150.0], [75.0, 149.0], [73.0, 101.0], [72.0, 51.0], [77.0, 120.0], [76.0, 50.0], [78.0, 120.0], [79.0, 28.0], [83.0, 47.0], [81.0, 121.0], [80.0, 150.0], [82.0, 114.0], [87.0, 43.0], [85.0, 149.0], [84.0, 50.0], [86.0, 117.0], [89.0, 150.0], [90.0, 149.0], [91.0, 150.0], [88.0, 150.0], [94.0, 149.0], [93.0, 150.0], [92.0, 50.0], [95.0, 37.0], [99.0, 149.0], [96.0, 56.0], [97.0, 149.0], [98.0, 149.0], [100.0, 149.0], [102.0, 153.0], [103.0, 116.0], [101.0, 150.0], [105.0, 149.0], [104.0, 50.0], [106.0, 41.0], [107.0, 175.0], [110.0, 50.0], [109.0, 150.0], [111.0, 47.0], [108.0, 150.0], [115.0, 100.0], [114.0, 149.0], [113.0, 150.0], [112.0, 50.0], [117.0, 143.5], [119.0, 149.0], [118.0, 50.0], [116.0, 55.5], [120.0, 51.0], [123.0, 124.0], [122.0, 149.0], [121.0, 116.5], [125.0, 150.0], [127.0, 149.0], [126.0, 149.0], [124.0, 148.0], [133.0, 149.0], [135.0, 150.0], [130.0, 148.0], [132.0, 150.0], [134.0, 150.0], [128.0, 150.0], [129.0, 151.0], [131.0, 149.0], [137.0, 145.0], [139.0, 145.0], [140.0, 53.0], [136.0, 123.5], [142.0, 149.0], [141.0, 149.0], [138.0, 150.0], [143.0, 149.0], [151.0, 150.0], [149.0, 142.0], [150.0, 150.0], [147.0, 148.0], [145.0, 116.5], [144.0, 149.0], [146.0, 146.0], [148.0, 148.0], [159.0, 128.0], [157.0, 149.0], [156.0, 147.0], [158.0, 149.0], [154.0, 132.5], [152.0, 126.0], [153.0, 137.0], [155.0, 149.0], [162.0, 88.0], [161.0, 48.0], [167.0, 50.0], [164.0, 41.0], [160.0, 57.0], [166.0, 58.0], [165.0, 53.0], [163.0, 57.0], [169.0, 46.0], [175.0, 149.0], [173.0, 46.0], [170.0, 59.0], [168.0, 45.0], [171.0, 54.0], [174.0, 44.0], [172.0, 46.0], [178.0, 45.0], [182.0, 51.0], [177.0, 47.0], [183.0, 50.0], [179.0, 48.0], [176.0, 43.0], [181.0, 51.0], [180.0, 50.0], [191.0, 47.0], [184.0, 51.0], [186.0, 50.0], [187.0, 61.0], [188.0, 45.0], [185.0, 50.0], [190.0, 44.0], [189.0, 43.0], [198.0, 41.0], [192.0, 40.0], [195.0, 39.0], [199.0, 39.0], [193.0, 41.0], [197.0, 40.0], [196.0, 40.0], [194.0, 39.0], [200.0, 40.0], [202.0, 39.0], [201.0, 39.0], [203.0, 40.0], [205.0, 43.0], [206.0, 45.0], [204.0, 40.0], [207.0, 42.0], [208.0, 44.0], [212.0, 49.0], [210.0, 44.0], [211.0, 44.0], [215.0, 47.0], [213.0, 44.0], [209.0, 49.0], [214.0, 49.0], [223.0, 46.0], [219.0, 47.0], [217.0, 51.0], [220.0, 51.0], [222.0, 53.0], [221.0, 45.0], [218.0, 48.0], [216.0, 38.0], [230.0, 93.0], [224.0, 48.0], [225.0, 74.0], [1.0, 91.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 230.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 25.0, "minX": 1.0, "maxY": 353.0, "series": [{"data": [[3.0, 322.0], [5.0, 50.0], [6.0, 148.0], [7.0, 42.5], [8.0, 150.0], [9.0, 25.0], [10.0, 125.5], [12.0, 149.5], [13.0, 150.0], [14.0, 150.0], [16.0, 131.0], [17.0, 147.0], [18.0, 149.0], [19.0, 150.0], [20.0, 50.0], [21.0, 152.0], [22.0, 45.5], [23.0, 50.0], [24.0, 151.0], [26.0, 50.0], [27.0, 25.0], [28.0, 150.0], [29.0, 148.0], [30.0, 29.0], [31.0, 45.0], [32.0, 25.0], [33.0, 150.0], [35.0, 150.0], [34.0, 51.0], [36.0, 31.0], [37.0, 50.0], [38.0, 50.0], [40.0, 50.0], [42.0, 148.0], [43.0, 150.0], [45.0, 51.0], [47.0, 162.0], [46.0, 50.0], [48.0, 150.0], [49.0, 150.0], [50.0, 149.0], [51.0, 53.0], [52.0, 52.0], [53.0, 25.0], [55.0, 150.0], [54.0, 126.0], [57.0, 53.0], [56.0, 50.0], [59.0, 112.0], [58.0, 49.0], [60.0, 50.0], [63.0, 79.5], [62.0, 119.5], [65.0, 50.0], [66.0, 149.0], [64.0, 50.0], [67.0, 353.0], [68.0, 50.0], [69.0, 51.0], [70.0, 140.0], [71.0, 150.0], [75.0, 149.0], [73.0, 101.0], [72.0, 51.0], [77.0, 120.0], [76.0, 50.0], [78.0, 120.0], [79.0, 28.0], [83.0, 47.0], [81.0, 121.0], [80.0, 150.0], [82.0, 114.0], [87.0, 43.0], [85.0, 149.0], [84.0, 50.0], [86.0, 117.0], [89.0, 150.0], [90.0, 149.0], [91.0, 150.0], [88.0, 150.0], [94.0, 149.0], [93.0, 149.5], [92.0, 50.0], [95.0, 37.0], [99.0, 149.0], [96.0, 56.0], [97.0, 149.0], [98.0, 149.0], [100.0, 149.0], [102.0, 153.0], [103.0, 116.0], [101.0, 150.0], [105.0, 149.0], [104.0, 50.0], [106.0, 41.0], [107.0, 175.0], [110.0, 50.0], [109.0, 150.0], [111.0, 47.0], [108.0, 150.0], [115.0, 100.0], [114.0, 149.0], [113.0, 150.0], [112.0, 50.0], [117.0, 143.5], [119.0, 149.0], [118.0, 50.0], [116.0, 55.5], [120.0, 51.0], [123.0, 124.0], [122.0, 149.0], [121.0, 116.5], [125.0, 150.0], [127.0, 149.0], [126.0, 149.0], [124.0, 148.0], [133.0, 149.0], [135.0, 150.0], [130.0, 148.0], [132.0, 150.0], [134.0, 150.0], [128.0, 150.0], [129.0, 151.0], [131.0, 149.0], [137.0, 145.0], [139.0, 145.0], [140.0, 53.0], [136.0, 123.5], [142.0, 149.0], [141.0, 149.0], [138.0, 150.0], [143.0, 149.0], [151.0, 150.0], [149.0, 142.0], [150.0, 150.0], [147.0, 148.0], [145.0, 116.5], [144.0, 149.0], [146.0, 146.0], [148.0, 148.0], [159.0, 128.0], [157.0, 149.0], [156.0, 147.0], [158.0, 149.0], [154.0, 132.5], [152.0, 126.0], [153.0, 137.0], [155.0, 149.0], [162.0, 88.0], [161.0, 48.0], [167.0, 50.0], [164.0, 41.0], [160.0, 57.0], [166.0, 58.0], [165.0, 53.0], [163.0, 57.0], [169.0, 46.0], [175.0, 149.0], [173.0, 46.0], [170.0, 59.0], [168.0, 45.0], [171.0, 54.0], [174.0, 44.0], [172.0, 46.0], [178.0, 45.0], [182.0, 51.0], [177.0, 47.0], [183.0, 50.0], [179.0, 48.0], [176.0, 43.0], [181.0, 51.0], [180.0, 50.0], [191.0, 47.0], [184.0, 51.0], [186.0, 50.0], [187.0, 61.0], [188.0, 45.0], [185.0, 50.0], [190.0, 44.0], [189.0, 43.0], [198.0, 41.0], [192.0, 40.0], [195.0, 39.0], [199.0, 39.0], [193.0, 41.0], [197.0, 40.0], [196.0, 40.0], [194.0, 39.0], [200.0, 40.0], [202.0, 39.0], [201.0, 39.0], [203.0, 40.0], [205.0, 43.0], [206.0, 45.0], [204.0, 40.0], [207.0, 42.0], [208.0, 44.0], [212.0, 49.0], [210.0, 44.0], [211.0, 44.0], [215.0, 47.0], [213.0, 44.0], [209.0, 49.0], [214.0, 49.0], [223.0, 46.0], [219.0, 47.0], [217.0, 51.0], [220.0, 51.0], [222.0, 53.0], [221.0, 45.0], [218.0, 48.0], [216.0, 38.0], [230.0, 93.0], [224.0, 48.0], [225.0, 74.0], [1.0, 91.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 230.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 11.733333333333333, "minX": 1.6884918E12, "maxY": 199.45, "series": [{"data": [[1.68849222E12, 182.26666666666668], [1.68849402E12, 183.75], [1.68849624E12, 189.26666666666668], [1.68849342E12, 183.06666666666666], [1.68849564E12, 182.38333333333333], [1.6884936E12, 183.6], [1.68849522E12, 181.45], [1.688493E12, 184.96666666666667], [1.68849462E12, 184.45], [1.68849642E12, 199.45], [1.68849258E12, 182.38333333333333], [1.6884948E12, 183.43333333333334], [1.68849204E12, 168.68333333333334], [1.6884942E12, 185.61666666666667], [1.68849582E12, 184.7], [1.68849246E12, 182.55], [1.68849378E12, 179.06666666666666], [1.688496E12, 176.51666666666668], [1.68849318E12, 185.1], [1.6884954E12, 183.33333333333334], [1.68849306E12, 185.7], [1.68849528E12, 186.58333333333334], [1.6884963E12, 131.73333333333332], [1.68849468E12, 181.58333333333334], [1.68849216E12, 175.1], [1.68849264E12, 185.23333333333332], [1.68849198E12, 179.45], [1.68849426E12, 186.25], [1.68849648E12, 162.35], [1.68849366E12, 183.46666666666667], [1.68849588E12, 183.25], [1.68849546E12, 184.26666666666668], [1.68849384E12, 183.23333333333332], [1.68849324E12, 183.18333333333334], [1.68849486E12, 183.28333333333333], [1.68849282E12, 183.55], [1.68849504E12, 183.2], [1.6884918E12, 11.733333333333333], [1.68849444E12, 185.18333333333334], [1.68849606E12, 131.41666666666666], [1.6884924E12, 178.75], [1.68849432E12, 185.4], [1.68849594E12, 186.36666666666667], [1.68849252E12, 187.71666666666667], [1.68849534E12, 182.95], [1.68849372E12, 185.1], [1.6884933E12, 186.55], [1.68849552E12, 185.48333333333332], [1.68849654E12, 173.13333333333333], [1.6884927E12, 181.8], [1.68849492E12, 183.3], [1.68849192E12, 119.53333333333333], [1.68849288E12, 187.11666666666667], [1.6884945E12, 185.03333333333333], [1.68849234E12, 128.2], [1.6884939E12, 181.53333333333333], [1.68849612E12, 93.43333333333334], [1.6884957E12, 183.95], [1.68849408E12, 186.26666666666668], [1.68849348E12, 183.58333333333334], [1.6884951E12, 182.38333333333333], [1.68849336E12, 182.16666666666666], [1.68849498E12, 183.18333333333334], [1.68849276E12, 188.18333333333334], [1.68849186E12, 181.81666666666666], [1.68849438E12, 182.26666666666668], [1.6884966E12, 11.916666666666666], [1.68849456E12, 181.16666666666666], [1.68849618E12, 179.85], [1.68849228E12, 99.51666666666667], [1.68849558E12, 184.48333333333332], [1.68849396E12, 184.91666666666666], [1.68849354E12, 185.18333333333334], [1.68849576E12, 185.85], [1.68849294E12, 186.65], [1.68849516E12, 188.08333333333334], [1.68849312E12, 183.73333333333332], [1.68849474E12, 180.15], [1.6884921E12, 96.43333333333334], [1.68849414E12, 185.91666666666666], [1.68849636E12, 198.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6884966E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 11.55, "minX": 1.6884918E12, "maxY": 199.38333333333333, "series": [{"data": [[1.68849222E12, 182.56666666666666], [1.68849402E12, 183.53333333333333], [1.68849624E12, 189.16666666666666], [1.68849342E12, 183.31666666666666], [1.68849564E12, 182.7], [1.6884936E12, 183.41666666666666], [1.68849522E12, 181.65], [1.688493E12, 185.25], [1.68849462E12, 184.4], [1.68849642E12, 199.38333333333333], [1.68849258E12, 182.65], [1.6884948E12, 183.15], [1.68849204E12, 168.65], [1.6884942E12, 185.73333333333332], [1.68849582E12, 184.7], [1.68849246E12, 182.41666666666666], [1.68849378E12, 179.33333333333334], [1.688496E12, 176.31666666666666], [1.68849318E12, 184.8], [1.6884954E12, 183.65], [1.68849306E12, 185.66666666666666], [1.68849528E12, 186.55], [1.6884963E12, 131.78333333333333], [1.68849468E12, 181.4], [1.68849216E12, 174.78333333333333], [1.68849264E12, 185.23333333333332], [1.68849198E12, 179.48333333333332], [1.68849426E12, 186.23333333333332], [1.68849648E12, 162.41666666666666], [1.68849366E12, 183.81666666666666], [1.68849588E12, 183.58333333333334], [1.68849546E12, 183.95], [1.68849384E12, 183.0], [1.68849324E12, 183.46666666666667], [1.68849486E12, 183.53333333333333], [1.68849282E12, 183.38333333333333], [1.68849504E12, 183.03333333333333], [1.6884918E12, 11.55], [1.68849444E12, 185.41666666666666], [1.68849606E12, 131.66666666666666], [1.6884924E12, 178.85], [1.68849432E12, 185.46666666666667], [1.68849594E12, 186.35], [1.68849252E12, 187.5], [1.68849534E12, 182.71666666666667], [1.68849372E12, 184.75], [1.6884933E12, 186.53333333333333], [1.68849552E12, 185.83333333333334], [1.68849654E12, 173.08333333333334], [1.6884927E12, 181.53333333333333], [1.68849492E12, 183.05], [1.68849192E12, 119.75], [1.68849288E12, 187.21666666666667], [1.6884945E12, 184.85], [1.68849234E12, 128.06666666666666], [1.6884939E12, 181.8], [1.68849612E12, 93.2], [1.6884957E12, 183.63333333333333], [1.68849408E12, 186.51666666666668], [1.68849348E12, 183.33333333333334], [1.6884951E12, 182.53333333333333], [1.68849336E12, 181.9], [1.68849498E12, 183.48333333333332], [1.68849276E12, 188.5], [1.68849186E12, 181.61666666666667], [1.68849438E12, 182.03333333333333], [1.6884966E12, 12.066666666666666], [1.68849456E12, 181.38333333333333], [1.68849618E12, 180.06666666666666], [1.68849228E12, 99.6], [1.68849558E12, 184.13333333333333], [1.68849396E12, 184.83333333333334], [1.68849354E12, 185.36666666666667], [1.68849576E12, 185.85], [1.68849294E12, 186.4], [1.68849516E12, 187.86666666666667], [1.68849312E12, 183.78333333333333], [1.68849474E12, 180.36666666666667], [1.6884921E12, 96.5], [1.68849414E12, 185.76666666666668], [1.68849636E12, 198.91666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6884966E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 11.55, "minX": 1.6884918E12, "maxY": 199.38333333333333, "series": [{"data": [[1.68849222E12, 182.56666666666666], [1.68849402E12, 183.53333333333333], [1.68849624E12, 189.16666666666666], [1.68849342E12, 183.31666666666666], [1.68849564E12, 182.7], [1.6884936E12, 183.41666666666666], [1.68849522E12, 181.65], [1.688493E12, 185.25], [1.68849462E12, 184.4], [1.68849642E12, 199.38333333333333], [1.68849258E12, 182.65], [1.6884948E12, 183.15], [1.68849204E12, 168.65], [1.6884942E12, 185.73333333333332], [1.68849582E12, 184.7], [1.68849246E12, 182.41666666666666], [1.68849378E12, 179.33333333333334], [1.688496E12, 176.31666666666666], [1.68849318E12, 184.8], [1.6884954E12, 183.65], [1.68849306E12, 185.66666666666666], [1.68849528E12, 186.55], [1.6884963E12, 131.78333333333333], [1.68849468E12, 181.4], [1.68849216E12, 174.78333333333333], [1.68849264E12, 185.23333333333332], [1.68849198E12, 179.48333333333332], [1.68849426E12, 186.23333333333332], [1.68849648E12, 162.41666666666666], [1.68849366E12, 183.81666666666666], [1.68849588E12, 183.58333333333334], [1.68849546E12, 183.95], [1.68849384E12, 183.0], [1.68849324E12, 183.46666666666667], [1.68849486E12, 183.53333333333333], [1.68849282E12, 183.38333333333333], [1.68849504E12, 183.03333333333333], [1.6884918E12, 11.55], [1.68849444E12, 185.41666666666666], [1.68849606E12, 131.66666666666666], [1.6884924E12, 178.85], [1.68849432E12, 185.46666666666667], [1.68849594E12, 186.35], [1.68849252E12, 187.5], [1.68849534E12, 182.71666666666667], [1.68849372E12, 184.75], [1.6884933E12, 186.53333333333333], [1.68849552E12, 185.83333333333334], [1.68849654E12, 173.08333333333334], [1.6884927E12, 181.53333333333333], [1.68849492E12, 183.05], [1.68849192E12, 119.75], [1.68849288E12, 187.21666666666667], [1.6884945E12, 184.85], [1.68849234E12, 128.06666666666666], [1.6884939E12, 181.8], [1.68849612E12, 93.2], [1.6884957E12, 183.63333333333333], [1.68849408E12, 186.51666666666668], [1.68849348E12, 183.33333333333334], [1.6884951E12, 182.53333333333333], [1.68849336E12, 181.9], [1.68849498E12, 183.48333333333332], [1.68849276E12, 188.5], [1.68849186E12, 181.61666666666667], [1.68849438E12, 182.03333333333333], [1.6884966E12, 12.066666666666666], [1.68849456E12, 181.38333333333333], [1.68849618E12, 180.06666666666666], [1.68849228E12, 99.6], [1.68849558E12, 184.13333333333333], [1.68849396E12, 184.83333333333334], [1.68849354E12, 185.36666666666667], [1.68849576E12, 185.85], [1.68849294E12, 186.4], [1.68849516E12, 187.86666666666667], [1.68849312E12, 183.78333333333333], [1.68849474E12, 180.36666666666667], [1.6884921E12, 96.5], [1.68849414E12, 185.76666666666668], [1.68849636E12, 198.91666666666666]], "isOverall": false, "label": "create cin-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6884966E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 11.55, "minX": 1.6884918E12, "maxY": 199.38333333333333, "series": [{"data": [[1.68849222E12, 182.56666666666666], [1.68849402E12, 183.53333333333333], [1.68849624E12, 189.16666666666666], [1.68849342E12, 183.31666666666666], [1.68849564E12, 182.7], [1.6884936E12, 183.41666666666666], [1.68849522E12, 181.65], [1.688493E12, 185.25], [1.68849462E12, 184.4], [1.68849642E12, 199.38333333333333], [1.68849258E12, 182.65], [1.6884948E12, 183.15], [1.68849204E12, 168.65], [1.6884942E12, 185.73333333333332], [1.68849582E12, 184.7], [1.68849246E12, 182.41666666666666], [1.68849378E12, 179.33333333333334], [1.688496E12, 176.31666666666666], [1.68849318E12, 184.8], [1.6884954E12, 183.65], [1.68849306E12, 185.66666666666666], [1.68849528E12, 186.55], [1.6884963E12, 131.78333333333333], [1.68849468E12, 181.4], [1.68849216E12, 174.78333333333333], [1.68849264E12, 185.23333333333332], [1.68849198E12, 179.48333333333332], [1.68849426E12, 186.23333333333332], [1.68849648E12, 162.41666666666666], [1.68849366E12, 183.81666666666666], [1.68849588E12, 183.58333333333334], [1.68849546E12, 183.95], [1.68849384E12, 183.0], [1.68849324E12, 183.46666666666667], [1.68849486E12, 183.53333333333333], [1.68849282E12, 183.38333333333333], [1.68849504E12, 183.03333333333333], [1.6884918E12, 11.55], [1.68849444E12, 185.41666666666666], [1.68849606E12, 131.66666666666666], [1.6884924E12, 178.85], [1.68849432E12, 185.46666666666667], [1.68849594E12, 186.35], [1.68849252E12, 187.5], [1.68849534E12, 182.71666666666667], [1.68849372E12, 184.75], [1.6884933E12, 186.53333333333333], [1.68849552E12, 185.83333333333334], [1.68849654E12, 173.08333333333334], [1.6884927E12, 181.53333333333333], [1.68849492E12, 183.05], [1.68849192E12, 119.75], [1.68849288E12, 187.21666666666667], [1.6884945E12, 184.85], [1.68849234E12, 128.06666666666666], [1.6884939E12, 181.8], [1.68849612E12, 93.2], [1.6884957E12, 183.63333333333333], [1.68849408E12, 186.51666666666668], [1.68849348E12, 183.33333333333334], [1.6884951E12, 182.53333333333333], [1.68849336E12, 181.9], [1.68849498E12, 183.48333333333332], [1.68849276E12, 188.5], [1.68849186E12, 181.61666666666667], [1.68849438E12, 182.03333333333333], [1.6884966E12, 12.066666666666666], [1.68849456E12, 181.38333333333333], [1.68849618E12, 180.06666666666666], [1.68849228E12, 99.6], [1.68849558E12, 184.13333333333333], [1.68849396E12, 184.83333333333334], [1.68849354E12, 185.36666666666667], [1.68849576E12, 185.85], [1.68849294E12, 186.4], [1.68849516E12, 187.86666666666667], [1.68849312E12, 183.78333333333333], [1.68849474E12, 180.36666666666667], [1.6884921E12, 96.5], [1.68849414E12, 185.76666666666668], [1.68849636E12, 198.91666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6884966E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}
