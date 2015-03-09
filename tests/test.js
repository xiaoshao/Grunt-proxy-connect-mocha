var test = require('unit.js');

function once(fn){
	var returnValue = 1,
	called = false;

	return function(){
		if(!called){
			called = true;
			returnValue = fn.apply(this, arguments);
			// console.log(arguments);
		}

		return returnValue;
	};
};

describe('learning by the example.', function(){
	it('example variable', function(done){
		var example = "hello world.";
		test
			.string(example)
				.startsWith('hello')
				.match(/[a-z]/);

		test
			.given(example = "you are welcome")
				.string(example)
					.endsWith("welcome");		

		test
			.when('when "example" is an object', function(){
				example = {
					message: "hello world",
					sex: "male"
				};
			})
			.then('test "example" object', function(){
				test
					.object(example)
						.hasProperty('message')
						.hasValue('male')
				
			})
		done();
	});

	it('test using sandbox', test.sinon.test(function(){
		var myAPI = {
			method: function(){
				return 1;
			}
		};

	
		var mockMyAPI = this.mock(myAPI).expects('method').returns(42);
	
		// test.dump(myAPI.method());

		var proxy = once(myAPI.method)();

		// test.dump(proxy);

		test.number(proxy).is(42);

		mockMyAPI.verify();
	}));
});