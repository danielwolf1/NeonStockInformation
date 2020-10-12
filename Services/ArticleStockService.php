<?php

namespace NeonStockInformation\Services;

use Shopware\Bundle\StoreFrontBundle\Service\Core\ContextService;
use Shopware\Bundle\StoreFrontBundle\Service\Core\ProductService;

class ArticleStockService
{
    /** @var ProductService  */
    private $productService;
    /*** @var ContextService */
    private $contextService;

    /**
     * ArticleStockService constructor.
     * @param ProductService $productService
     * @param ContextService $contextService
     */
    public function __construct($productService, $contextService)
    {
        $this->productService = $productService;
        $this->contextService = $contextService;
    }

    public function getStock($ordernumer)
    {
        return rand(1,30);;
    }

}