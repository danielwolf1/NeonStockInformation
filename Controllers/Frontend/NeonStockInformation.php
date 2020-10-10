<?php

use Shopware\Components\CSRFWhitelistAware;

class Shopware_Controllers_Frontend_NeonStockInformation extends \Enlight_Controller_Action implements CSRFWhitelistAware
{

    public function getStockAction()
    {
        $this->Front()->Plugins()->ViewRenderer()->setNoRender();

        /**
         * retrieve passed params here:
         * $param = $this->Request()->getParam('NAME');
         *
         * get current stock of article with this service:
         * Shopware()->Container()->get('neon_stock_information.services.article_stock_service')
         *
         * get plugin configuration service (i.e if the box color-thresholds
         * should be controlled with the plugin configuration in the backend
         *
         * $pluginConfig = Shopware()->Container()->get('config');
        **/


        $output = [
            'stock' => 999999
        ];

        echo json_encode($output);
    }

    public function getWhitelistedCSRFActions()
    {
        return
            [
                'getStock'
            ];
    }
}