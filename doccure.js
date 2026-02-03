$('.slider-Top-Specialties').owlCarousel({
            loop: true,
            margin: 27,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                770: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 6
                }
            }
        })
          $('.slider-auto').owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplayspeed: 30000,
            smartspeed: 50000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }

            }
        })
    //    revenue-chart
        const ctx = document.getElementById('revenue-chart');

        new Chart(ctx, {
            type: 'bar',

            data: {
                labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                datasets: [{

                    data: [50, 40, 15, 45, 35, 48, 65],
                    backgroundColor: [
                        '#0d6efd',
                        '#0d6efd',
                        '#0d6efd',
                        '#f4b400',
                        '#0d6efd',
                        '#0d6efd',
                        '#0d6efd'
                    ],
                    borderRadius: 1,
                    barThinckness: 20,
                    barPercentge: 0.7,
                    categoryPercentge: 0.6,
                    inflateAmount:1

                }
                ]
            },

            options: {
                Responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },

                },
                scales: {
                    x: {
                        grid: { display: false }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: { stepSize: 20, }
                    }
                }
            }
        });
    
// appointments-chart 
     
        const ctx2 = document.getElementById('appointments-chart');

        new Chart(ctx2, {
            type: 'bar',

            data: {
                labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                datasets: [{

                    data: [50, 40, 15, 45, 35, 48, 65],
                    backgroundColor: [
                        '#000',
                        '#000',
                        '#000',
                        '#0d6efd',
                        '#000',
                        '#000',
                        '#000'
                    ],
                    borderRadius: 1,
                }
                ]
            },

            options: {
                Responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },

                },
                scales: {
                    x: {
                        grid: { display: false }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: { stepSize: 20, }
                    }
                }
            }
        });
   