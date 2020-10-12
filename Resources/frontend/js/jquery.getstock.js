;(function ($, window) {

    $.plugin('neonGetStock', {

        /**
         * Default configuration of the plugin.
         * @object
         */
        defaults: {
           dummyvalue: null,
           refresh: 15000,
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

            var refresh = function() {
                $.ajax({
                    url: '/NeonStockInformation/getStock',
                    method: 'GET',
                    success: function (response) {
                        console.log(response);
                        if(response.stock < 5) $('#NeonStockInfo').removeClass("high mid").addClass("low");
                        else if(response.stock < 20 ) $('#NeonStockInfo').removeClass("high low").addClass("mid");
                        else if(response.stock >= 20) $('#NeonStockInfo').removeClass("mid low").addClass("high");
                        else
                            console.log("Err: intStock is "+response.stock);

                        setTimeout(function() {
                            refresh();
                        }, me.refresh);    
                    }
                });
            };
            refresh();
        },

    });
})(jQuery, window);

$('#NeonStockInfo').neonGetStock();