<?php

namespace NeonStockInformation\Subscriber;

use Enlight\Event\SubscriberInterface;

class Theme implements SubscriberInterface {


    private $viewDir;

    public function __construct($viewDir)
    {
        $this->viewDir = $viewDir;
    }

    /**
     * @return array The event names to listen to
     */
    public static function getSubscribedEvents()
    {
        return [
            'Theme_Inheritance_Template_Directories_Collected' => ['addViewDir']
        ];
    }

    public function addViewDir(\Enlight_Event_EventArgs $args)
    {
        $return = $args->getReturn();

        $return[] = $this->viewDir;


        $args->setReturn($return);
    }
}