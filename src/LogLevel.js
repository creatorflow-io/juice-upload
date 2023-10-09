export default {
    Verbose: -1,
    Info: 0,
    Warning: 1,
    Error: 2,
    name: function (level) {
        switch (level) {
            case -1:
                return "Verbose";
            case 0:
                return "Info";
            case 1:
                return "Warning";
            case 2:
                return "Error";
            default:
                return "Unknown";
        }
    }
};