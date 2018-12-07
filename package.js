Package.describe({
  name: 'neobii:vulcan-draft-twbs',
});

Package.onUse(function (api) {

  api.use([

    // vulcan core
    'vulcan:core@1.12.9',

    // vulcan packages
    'vulcan:forms@1.12.9',

    //draft core
    'neobii:vulcan-draft-core'
  ]);
  
  api.mainModule('lib/DraftFieldLayout.jsx', 'server');
  api.mainModule('lib/DraftFieldLayout.jsx', 'client');

});
