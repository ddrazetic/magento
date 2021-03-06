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

function betterblogTree(treeId) {
    var tree = $(treeId);
    if (tree) {
        tree.addClassName('tree');
        tree.select('ul').each(function (list) {
            $(list).hide();
        })
        tree.select('li').each(function (item) {
            var children = $(item).childElements().grep(new Selector('ul'));
            if (children.length > 0) {
                var span = new Element('span').addClassName('collapsed');
                span.observe('click', function (el) {
                    if ($(this).hasClassName('collapsed')) {
                        this.addClassName('expanded');
                        this.removeClassName('collapsed');
                        $(item).childElements().grep(new Selector('ul')).each(function (list) {
                            $(list).show();
                        });
                    } else {
                        this.removeClassName('expanded');
                        this.addClassName('collapsed');
                        $(item).childElements().grep(new Selector('ul')).each(function (list) {
                            $(list).hide();
                        });
                    }
                });
                $(item).insert({top: span});
            }
        });
    }
    ;
};

// jQuery(document).ready(function () {
//
//     console.log('dffew');
//
//     betterblogTree("#treeId");
//
//     function betterblogTree(treeId) {
//         // console.log(treeId);
//         // jQuery("#treeId").text('fsdf');
//         var tree = jQuery(treeId);
//         console.log(tree);
//         if (tree) {
//
//             tree.addClass('tree');
//             tree.select('ul').each(function (list) {
//                 jQuery(list).hide();
//             })
//             tree.select('li').each(function (item) {
//                 console.log(item)
//                 // var children = jQuery(item).childElements().grep(new Selector('ul'));
//                 // if (children.length > 0) {
//                 //     var span = new Element('span').addClassName('collapsed');
//                 //     span.observe('click', function (el) {
//                 //         if (jQuery(this).hasClassName('collapsed')) {
//                 //             this.addClassName('expanded');
//                 //             this.removeClassName('collapsed');
//                 //             jQuery(item).childElements().grep(new Selector('ul')).each(function (list) {
//                 //                 jQuery(list).show();
//                 //             });
//                 //         } else {
//                 //             this.removeClassName('expanded');
//                 //             this.addClassName('collapsed');
//                 //             jQuery(item).childElements().grep(new Selector('ul')).each(function (list) {
//                 //                 jQuery(list).hide();
//                 //             });
//                 //         }
//                 //     });
//                 //     jQuery(item).insert({top: span});
//                 // }
//             });
//         }
//         ;
//     };
//
// });

//
// $j(document).ready(function () {
//
//     console.log('dffew');
//
//     betterblogTree("#treeId");
//
//     function betterblogTree(treeId) {
//         // console.log(treeId);
//         // jQuery("#treeId").text('fsdf');
//         var tree = jQuery(treeId);
//         console.log($(treeId));
//         if (tree) {
//
//             tree.addClass('tree');
//             tree.select('ul').each(function (list) {
//                 $(list).hide();
//             })
//             tree.select('li').each(function (item) {
//                 var children = $(item).childElements().grep(new Selector('ul'));
//                 if (children.length > 0) {
//                     var span = new Element('span').addClassName('collapsed');
//                     span.observe('click', function (el) {
//                         if ($(this).hasClassName('collapsed')) {
//                             this.addClassName('expanded');
//                             this.removeClassName('collapsed');
//                             $(item).childElements().grep(new Selector('ul')).each(function (list) {
//                                 $(list).show();
//                             });
//                         } else {
//                             this.removeClassName('expanded');
//                             this.addClassName('collapsed');
//                             $(item).childElements().grep(new Selector('ul')).each(function (list) {
//                                 $(list).hide();
//                             });
//                         }
//                     });
//                     $(item).insert({top: span});
//                 }
//             });
//         }
//         ;
//     };
//
// });