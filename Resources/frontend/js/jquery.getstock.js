;(function ($, window) {

    $.plugin('neonGetStock', {

        /**
         * Default configuration of the plugin.
         * @object
         */
        defaults: {
           dummyvalue: null
        },

        /**
         * Initializes the plugin and sets up the necessary event handler
         */
        init: function () {
            var me = this;

            //this method call reads the data-attributes of the element and makes them available:
            //data-dummyvalue is accessible with me.opts.dummyvalue

            console.log(me.opts.dummyvalue);
            me.applyDataAttributes();


            $.ajax({
                url: '.....',
                method: 'GET',
                success: function (response) {
                    console.log(response);
                }
            });

        },

    });
})(jQuery, window);

$('*[data-get-stock]').neonGetStock();