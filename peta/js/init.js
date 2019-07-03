$(document).ready(function () {
    $('[data-toggle="popover"]').popover({
        html: true,
        //placement: 'top',
        trigger: 'focus',
        content: function () {
            if ($(this).data('img') == null && $(this).data('deskripsi') == null && $(this).data('link') == null && $(this).data('link2') == null) {
                return null
            } else if ($(this).data('img') != null && $(this).data('deskripsi') == null && $(this).data('link') == null && $(this).data('link2') == null) {
                return '<img src="' + $(this).data('img') + '" />'
            } else if ($(this).data('img') == null && $(this).data('deskripsi') != null && $(this).data('link') == null && $(this).data('link2') == null) {
                return '<p>' + $(this).data('deskripsi') + '</p>'
            } else if ($(this).data('img') != null && $(this).data('deskripsi') != null && $(this).data('link') == null && $(this).data('link2') == null) {
                return '<img src="' + $(this).data('img') + '" />' + '<p>' + $(this).data('deskripsi') + '</p>'
            } else if ($(this).data('img') != null && $(this).data('deskripsi') != null && $(this).data('link') != null && $(this).data('link2') == null) {
                return '<img src="' + $(this).data('img') + '" />' + '<p>' + $(this).data('deskripsi') + '</p>' +
                    '<p><a href="' + $(this).data('link') + '" target="_blank">' + $(this).data('link') + '</a></p>'
            }
            return '<img src="' + $(this).data('img') + '" />' + '<p>' + $(this).data('deskripsi') + '</p>' +
                '<p><a href="' + $(this).data('link') + '" target="_blank">' + $(this).data('link') + '</a></p>' +
                '<p><a href="' + $(this).data('link2') + '" target="_blank">' + $(this).data('link2') + '</a></p>'
        },
        template: '<div class="popover">' +
            '<div class="arrow"></div>' +
            '<i class="close fa fa-times" aria-hidden="true"></i>' +
            '<h3 class="popover-title"></h3>' +
            '<div class="popover-content"></div>' +
            '</div>'
    });


    $('#sepeda-kampus').click(function () {
        $('img.sepeda-kampus').toggle();
    });

    $('#sepeda-kampus2').click(function () {
        $('img.sepeda-kampus2').toggle();
    });

    $('#sekre').click(function () {
        $('img.sekre').toggle();
    });

    $('#kantong-parkir').click(function () {
        $('img.kantong-parkir').toggle();
    });

    $('#skkk').click(function () {
        $('img.skkk').toggle();
    });

    $('#gmc').click(function () {
        $('img.gmc').toggle();
    });

    $('img.kantong-parkir').click(function () {
        $('#modalParkir').modal('toggle');
    });

    $('img.sepeda-kampus').click(function () {
        $('#modalSepeda').modal('toggle');
    });

    $('img.sepeda-kampus2').click(function () {
        $('#modalSepeda').modal('toggle');
    });

    $('img.sekre').click(function () {
        $('#modalSekre').modal('toggle');
    });

    $('img.skkk').click(function () {
        $('#modalSkkk').modal('toggle');
    });

    $('img.gmc').click(function () {
        $('#modalGMC').modal('toggle');
    });
});