var IntlMixin = ReactIntl.IntlMixin;
var FormattedMessage = ReactIntl.FormattedMessage;
var FormattedDate = ReactIntl.FormattedDate;
var locale = {ja:["ja-JP"], fr:["fr"]};
var json = { ja : {"moods": 'some Japanese text here'},
  fr: {"moods": 'some French text here'}
};
console.log(IntlMixin);
console.log(FormattedMessage);

var HelloMessage = React.createClass({
  mixins: [IntlMixin],

  render: function() {
    return (
      <div>
        <p>
          <FormattedMessage message={this.getIntlMessage('moods')} name="Matt" mood="Suck" />
        </p>
        <p>
          <FormattedDate
            value={new Date()}
            day="numeric"
            month="long"
            year="numeric" />
        </p>
      </div>
    );
  }
});

var IntlData = {
  "locales": locale.fr,
  "messages": json.fr
};

ReactDOM.render(<HelloMessage {...IntlData}  />, document.getElementById('content'));