$(document).ready(function () {
    $('#example').DataTable();
    _chart2 = new Chart(document.getElementById('devicesChart'), {
      type: 'doughnut',
      data: {
      	labels: ["Desktop", "Table", "Mobile"],
    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: ['#2c7be5', '#a6c5f7', '#d2ddec'],
        borderWidth: 1,
        borderColor: '#fff',
        borderHover: '#fff',
      }
    ]   
      },
      options: {
        responsive: true,
        maintainAspectRatio: !1,
        tooltips: {
          enabled: false,
          mode: "index",
          intersect: false,
          custom: function (r) {
            var a = $("#chart-tooltip");
            if (a.length || (a = $('<div id="chart-tooltip" class="popover bs-popover-top" role="tooltip"></div>'), $("body").append(a)), 0 !== r.opacity) {
              if (r.body) {
                var e = r.title || [],
                  l = r.body.map(function (a) {
                    return a.lines
                  }),
                  n = "";
                n += '<div class="arrow"></div>', e.forEach(function (a) {
                  n += '<h3 class="popover-header text-center">' + a + "</h3>"
                }), l.forEach(function (a, e) {
                  var t = '<span class="popover-body-indicator" style="background-color: ' + r.labelColors[e].backgroundColor + '"></span>',
                    o = 1 < l.length ? "justify-content-left" : "justify-content-center";
                  n += '<div class="popover-body d-flex align-items-center ' + o + '">' + t + a + "</div>"
                }), a.html(n)
              }
              var t = $(this._chart.canvas),
                o = (t.outerWidth(), t.outerHeight(), t.offset().top),
                s = t.offset().left,
                i = a.outerWidth(),
                c = a.outerHeight(),
                d = o + r.caretY - c - 16,
                u = s + r.caretX - i / 2;
              a.css({
                top: "calc(" + d + "px - 1.5%)",
                left: u + "px",
                display: "block"
              })
            } else a.css("display", "none")
          },
          callbacks: {
            title: function (a, e) {
              return e.labels[a[0].index]
            },
            label: function (a, e) {
              var t = "";
              return t += '<span class="popover-body-value">' + e.datasets[0].data[a.index] + "%</span>"
            }
          }
        },
        cutoutPercentage: 86,
        legend: {
          display: false
        }
      }
    });
  new Chart(document.getElementById("ordersChart"), {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Sales",
        data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
        backgroundColor: "#2c7be5",
        borderColor: "#2c7be5"
      }]
    },
    options: {
      scales: {
        xAxes: [{
          barThickness: 10,
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            display: false,
          }
        }],
        yAxes: [{
          ticks: {
            fontWeight: 300,
            fontFamily: "Arial",
            fontSize: 14,
            fontColor: '#90a0b7',
            beginAtZero: true,
            callback: function (a) {
              if (!(a % 10)) return "$" + a + "k"
            }
          },
          gridLines: {
            drawBorder: false,
            borderDash: [2, 4],
            color: "#e6edf7"
          }
        }]
      },
      tooltips: {
        enabled: false,
        mode: "index",
        intersect: false,
        custom: function (r) {
          var a = $("#chart-tooltip");
          if (a.length || (a = $('<div id="chart-tooltip" class="popover bs-popover-top" role="tooltip"></div>'), $("body").append(a)), 0 !== r.opacity) {
            if (r.body) {
              var e = r.title || [],
                l = r.body.map(function (a) {
                  return a.lines
                }),
                n = "";
              n += '<div class="arrow"></div>', e.forEach(function (a) {
                n += '<h3 class="popover-header text-center">' + a + "</h3>"
              }), l.forEach(function (a, e) {
                var t = '<span class="popover-body-indicator" style="background-color: ' + r.labelColors[e].backgroundColor + '"></span>',
                  o = 1 < l.length ? "justify-content-left" : "justify-content-center";
                n += '<div class="popover-body d-flex align-items-center ' + o + '">' + t + a + "</div>"
              }), a.html(n)
            }
            var t = $(this._chart.canvas),
              o = (t.outerWidth(), t.outerHeight(), t.offset().top),
              s = t.offset().left,
              i = a.outerWidth(),
              c = a.outerHeight(),
              d = o + r.caretY - c - 16,
              u = s + r.caretX - i / 2;
            a.css({
              top: "calc(" + d + "px - 1.5%)",
              left: u + "px",
              display: "block"
            })
          } else a.css("display", "none")
        },
        callbacks: {
          title: function (a, e) {
            return e.labels[a[0].index]
          },
          label: function (a, e) {
            var t = "";
            return t += '<span class="popover-body-value">' + e.datasets[0].data[a.index] + "%</span>"
          }
        }
      },
      legend: {
        display: false,
      }
    },
  })
  new Chart(document.getElementById("performance"), {
    type: 'line',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        data: [0,10,5,15,10,20,15,25,20,30,25,40],
        backgroundColor: "transparent",
        borderColor: "#2c7be5"
      }]
    },
    options: {
      legend: {
        display: false,
      },
      elements: {
        point: {
          radius: 0,
        }
      },
      scales: {
        xAxes: [{
          barThickness: 10,
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            display: false,
          }
        }],
        yAxes: [{
          ticks: {
            fontWeight: 300,
            fontFamily: "Arial",
            fontSize: 14,
            fontColor: '#90a0b7',
            beginAtZero: true,
            callback: function (a) {
              if (!(a % 10)) return "$" + a + "k"
            }
          },
          gridLines: {
            drawBorder: false,
            borderDash: [2, 4],
            color: "#e6edf7"
          }
        }]
      },
    }
    });
});