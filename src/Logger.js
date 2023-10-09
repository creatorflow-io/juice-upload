import LogLevel from "./LogLevel.js";
function Logger(logging) {
    this._logging = logging;
}

Logger.prototype._log = function(){
    let that = this;
    if(typeof that._logging == "function"){
        that._logging.apply(that, arguments);
    }else{
        let level = arguments[0];
        Array.prototype.shift.call(arguments, 1);
        switch(level){
            case LogLevel.Error:
                console.error.apply(console, arguments);
                break;
            case LogLevel.Warning:
                console.warn.apply(console, arguments);
                break;
            case LogLevel.Info:
                console.info.apply(console, arguments);
                break;
            case LogLevel.Debug:
                console.debug.apply(console, arguments);
                break;
            default:
                console.log.apply(console, arguments);
        }
    }
};

Logger.prototype.log = function(){
    Array.prototype.unshift.call(arguments, LogLevel.Info);
    Logger.prototype._log.apply(this, arguments);
};

Logger.prototype.debug = function(){
    Array.prototype.unshift.call(arguments, LogLevel.Verbose);
    Logger.prototype._log.apply(this, arguments);
};

Logger.prototype.warn = function(){
    Array.prototype.unshift.call(arguments, LogLevel.Warning);
    Logger.prototype._log.apply(this, arguments);
};

Logger.prototype.error = function(){
    Array.prototype.unshift.call(arguments, LogLevel.Error);
    Logger.prototype._log.apply(this, arguments);
};

export default Logger;