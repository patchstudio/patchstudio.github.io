$(document).ready(function() {
            $('#scrollcontent').fullpage({
                anchors: ['welcome', 'us', 'workingon', 'joinpatch'],
                navigation: true,
                navigationPosition: 'left',
                navigationTooltips: ['Home', 'About', 'Currently Working On', 'Jobs']
            });
        });