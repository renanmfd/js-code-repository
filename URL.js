/**
 * @namespace UTIL.URL
 *                    
 * URL manipulation functions.
 */
URL: {
    /**
     * Add a query value(s) and key(s) to some url.
     * 
     * @mathod addQuery
     * @param {String} url - String containing the hole url
     * @param {String} name - Name of the parameter to add
     * @param {String} value - Value of the parameter to add
     */
    addQuery: function (url, name, value) {
        var index,
            aux,
            baseURL,
            queryURL,
            data = {};

        // Split the URL in baseURL (www.google.com) and queryURL (data=1&f=0&age=1).
        aux = url.split("?");
        baseURL = aux[0];
        queryURL = aux[1] ? aux[1].split("&") : [];
        // Build an object with query properties being keys and values.
        for (index = 0; index < queryURL.length; index += 1) {
            aux = queryURL[index].split("=");
            data[aux[0]] = aux[1] || "";
        }
        // Put/replace the new value.
        data[name] = value;
        // Build the query again with the data object.
        queryURL = [];
        for (index in data) {
            if (data.hasOwnProperty(index)) {
                queryURL.push(index + "=" + data[index]);
            }
        }
        return baseURL + "?" + queryURL.join("&");
    },

    /**
     * Remove a query value(s) and key(s) to some url.
     * 
     * @method removeQuery
     * @param {String} url - String containing the hole url
     * @param {String} name - Name of the parameter to remove
     */
    removeQuery: function (url, name) {
        var index,
            aux,
            baseURL,
            queryURL,
            data = {};

        // Split the URL in baseURL (www.google.com) and queryURL (data=1&f=0&age=1).
        aux = url.split("?");
        baseURL = aux[0];
        queryURL = aux[1] ? aux[1].split("&") : [];
        // Build an object with query properties being keys and values.
        for (index = 0; index < queryURL.length; index += 1) {
            aux = queryURL[index].split("=");
            data[aux[0]] = aux[1] || "";
        }
        // Remove the property.
        delete data[name];
        // Build the query again with the data object.
        queryURL = [];
        for (index in data) {
            if (data.hasOwnProperty(index)) {
                queryURL.push(index + "=" + data[index]);
            }
        }
        return baseURL + (queryURL.length ? "?" + queryURL.join("&") : "");
    },

    /**
     * Check if an url query has a specific parameter.
     * 
     * @method hasQuery
     * @param {String} url - String containing the hole url
     * @param {String} name - Name of the parameter to check
     */
    hasQuery: function (url, name) {
        var index,
            aux,
            queryURL;

        // Split the URL in baseURL (www.google.com) and queryURL (data=1&f=0&age=1).
        aux = url.split("?");
        queryURL = aux[1] ? aux[1].split("&") : [];
        // Build an object with query properties being keys and values.
        for (index = 0; index < queryURL.length; index += 1) {
            aux = queryURL[index].split("=");
            if (aux[0] === name) {
                return true;
            }
        }
        return false;
    },

    /**
     * Get specific parameter value of some url query.
     * 
     * @method hasQuery
     * @param {String} url - String containing the hole url
     * @param {String} name - Name of the parameter to get
     */
    getQuery: function (url, name) {
        var index,
            aux,
            queryURL;

        // Split the URL in baseURL (www.google.com) and queryURL (data=1&f=0&age=1).
        aux = url.split("?");
        queryURL = aux[1] ? aux[1].split("&") : [];
        // Build an object with query properties being keys and values.
        for (index = 0; index < queryURL.length; index += 1) {
            aux = queryURL[index].split("=");
            if (aux[0] === name) {
                return aux[1];
            }
        }
        return false;
    }
}
