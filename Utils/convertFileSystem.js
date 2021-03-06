/**
 * Created by SANTOSH on 10/26/2016.
 */
var convertBytesToKb = function (bytes, si) {
    var thresh = si ? 1000 : 1024;
    var units = ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    if (Math.abs(bytes) < thresh) {
        return bytes + ' B';
    }


    var u = -1;
    do {
        bytes /= thresh;
        ++u;
    } while (Math.abs(bytes) >= thresh && u < units.length - 1);
    return bytes.toFixed(1) + ' ' + units[u];

}
var getFileType  = function(originalFileName){

    if(originalFileName != undefined ||  originalFileName != null || originalFileName!="")
        return originalFileName.split('.').pop();
    else
        return false
}

var hrsToMinutes  = function (time) {
    time = time.split(":");
    return parseInt(time[0]) * 60 + parseInt(time[1]);
}

var minutesToHours = function (minutes) {
    var mins = Math.round(parseInt((((minutes / 60) % 1).toFixed(2).substring(2))) * 0.6);
    mins = (mins < 10) ? "0" + mins : mins;
    var hrs = Math.floor(minutes / 60);
    hrs = (hrs < 10) ? "0" + hrs : hrs;
    return hrs + ":" + mins;
}

var customConverter = {
    convertBytesToKb: convertBytesToKb,
    getFileType :getFileType,
    hrsToMinutes:hrsToMinutes,
    minutesToHours:minutesToHours
}



module.exports = customConverter;