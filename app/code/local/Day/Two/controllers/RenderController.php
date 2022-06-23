<?php

class Day_Two_RenderController
    extends Mage_Core_Controller_Front_Action
{
    public function blockAction()
    {
        $this->getResponse()->setBody('Hello Magento!');
    }

    public function overrideAction()
    {
        $blockHtml = $this->getLayout()
            ->createBlock('day_two/sample')
            ->toHtml();
        $this->getResponse()->setBody($blockHtml);
    }

    public function templateAction()
    {
        $blockHtml = $this->getLayout()
            ->createBlock('core/template')
            ->setTemplate('day_two/random.phtml')
            ->toHtml();
        $this->getResponse()->setBody($blockHtml);
    }

    public function registryAction()
    {
        Mage::register('some_var', 'Some value.');
        $blockHtml = $this->getLayout()
            ->createBlock('day_two/registry')
            ->setTemplate('day_two/registry.phtml')
            ->toHtml();
        $this->getResponse()->setBody($blockHtml);
    }

    public function listBlockAction()
    {
        $tlb = $this->getLayout()
            ->createBlock('core/text_list');
        $blockA = $this->getLayout()
            ->createBlock('core/text')
            ->setText('<h1>Block A</h1>');
        $blockB = $this->getLayout()
            ->createBlock('core/text')
            ->setText('<h1>Block B</h1>');
        $tlb->insert($blockA)
            ->insert($blockB);
//        $this->getResponse()
//            ->setBody($tlb->toHtml());
        $this->loadLayout();
        $this->getLayout()
            ->getBlock('content ')
            ->insert($tlb);
        $this->renderLayout();

    }

    public function layoutAction()
    {
        $this->loadLayout()->renderLayout();
    }

    public function handleAction()
    {
        $this->loadLayout('cool_handle')->renderLayout();
    }

    public function finalAction()
    {
        $this->loadLayout()->renderLayout();
    }

}