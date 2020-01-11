//require('./bootstrap');
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

ClassicEditor
    // Note that you do not have to specify the plugin and toolbar configuration — using defaults from the build.
    .create( document.querySelector( '#editor' ) )
    .then( editor => {
        console.log( 'Editor was initialized', editor );
    } )
    .catch( error => {
        console.error( error.stack );
    } );
