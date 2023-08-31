/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#
   config.filebrowserBrowseUrl = '/studenttrade/kcfinder/browse.php?opener=ckeditor&type=files';
   config.filebrowserImageBrowseUrl = '/studenttrade/kcfinder/browse.php?opener=ckeditor&type=images';
   config.filebrowserFlashBrowseUrl = '/studenttrade/kcfinder/browse.php?opener=ckeditor&type=flash';
   config.filebrowserUploadUrl = '/studenttrade/kcfinder/upload.php?opener=ckeditor&type=files';
   config.filebrowserImageUploadUrl = '/studenttrade/kcfinder/upload.php?opener=ckeditor&type=images';
   config.filebrowserFlashUploadUrl = '/studenttrade/kcfinder/upload.php?opener=ckeditor&type=flash';
   config.filebrowserUploadMethod = 'form';

};
