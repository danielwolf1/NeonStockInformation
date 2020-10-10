<?php

namespace NeonStockInformation;

use Shopware\Components\Plugin;
use Symfony\Component\DependencyInjection\ContainerBuilder;

/**
 * Shopware-Plugin NeonStockInformation.
 */
class NeonStockInformation extends Plugin
{

    /**
    * @param ContainerBuilder $container
    */
    public function build(ContainerBuilder $container)
    {
        $container->setParameter('neon_stock_information.plugin_dir', $this->getPath());
        $container->setParameter('neon_stock_information.view_dir', $this->getPath() .'/Resources/views');
        parent::build($container);
    }

}
