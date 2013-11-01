// call this from the developer console and you can control both instances
var calendars = {};

$(document).ready( function() {

  // assuming you've got the appropriate language files,
  // clndr will respect whatever moment's language is set to.
  // moment.lang('ru');

  // here's some magic to make sure the dates are happening this month.
  var thisMonth = moment().format('YYYY-MM');

  // Here's our events array. We could grab this via AJAX as well.
  var eventArray = [
    { date: '2013-11-30', title: 'Matrimonio Matteo e Thamiris', url: 'http://google.com' }
  ];

  // the order of the click handlers is predictable.
  // direct click action callbacks come first: click, nextMonth, previousMonth, nextYear, previousYear, or today.
  // then onMonthChange (if the month changed).
  // finally onYearChange (if the year changed).

  calendars.clndr1 = $('.cal1').clndr({
    events: eventArray,
    clickEvents: {
      click: function(target) {
        console.log(target);
      },
      nextMonth: function() {
        console.log('next month.');
      },
      previousMonth: function() {
        console.log('previous month.');
      },
      onMonthChange: function() {
        console.log('month changed.');
      },
      nextYear: function() {
        console.log('next year.');
      },
      previousYear: function() {
        console.log('previous year.');
      },
      onYearChange: function() {
        console.log('year changed.');
      }
    },
    showAdjacentMonths: false,
    adjacentDaysChangeMonth: true
  });

  calendars.clndr2 = $('.cal2').clndr({
    template: $('#template-calendar').html(),
    events: eventArray,
    startWithMonth: moment(),
    clickEvents: {
      click: function(target) {
        window.open('https://www.google.com/calendar/render?action=TEMPLATE&text=Matteo+and+Thamiris+wedding&dates=20131130T100000Z/20131130T210000Z&details&location=Comune+di+Campolongo+Maggiore&trp=false&sprop=http://matteoethamiris.me&sprop=name:matteoethamiris.me&pli=1&t=AKUaPmbyhgVnnHGpruLr8kOKGFem0OSVBfgB_5yBRBK1_P2rSejgx5DYr3y5h9M0DJnkVPlL1axY&sf=true&output=xml', '_blank');
      }
    }
  });

});