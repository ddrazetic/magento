<?php
/**
 * Mageplaza_BetterBlog extension
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the MIT License
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/mit-license.php
 *
 * @category       Mageplaza
 * @package        Mageplaza_BetterBlog
 * @copyright      Copyright (c) 2015
 * @license        http://opensource.org/licenses/mit-license.php MIT License
 */

/**
 * Category view block
 *
 * @category    Mageplaza
 * @package     Mageplaza_BetterBlog
 * @author      Sam
 */
class Mageplaza_BetterBlog_Block_Category_View extends Mage_Core_Block_Template
{
    /**
     * get the current category
     *
     * @access public
     * @return mixed (Mageplaza_BetterBlog_Model_Category|null)
     * @author Sam
     */
    public function getCurrentCategory()
    {
        return Mage::registry('current_category');
    }

//    public function getPost()
//    {
//        $postId = Mage::registry('post_id');
//
//        $post = Mage::getModel('mageplaza_betterblog/post')
//            ->setStoreId(Mage::app()->getStore()->getId())
//            ->load($postId);
//
//        return $post;
//    }

}
