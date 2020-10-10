<?php

namespace NeonStockInformation\Tests;

use NeonStockInformation\NeonStockInformation as Plugin;
use Shopware\Components\Test\Plugin\TestCase;

class PluginTest extends TestCase
{
    protected static $ensureLoadedPlugins = [
        'NeonStockInformation' => []
    ];

    public function testCanCreateInstance()
    {
        /** @var Plugin $plugin */
        $plugin = Shopware()->Container()->get('kernel')->getPlugins()['NeonStockInformation'];

        $this->assertInstanceOf(Plugin::class, $plugin);
    }
}
