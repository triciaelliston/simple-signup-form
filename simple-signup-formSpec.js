describe('optIn', function() {

	var scope,
		element,
		compiled,
		html;

	beforeEach(module("signup-template"));
	beforeEach(module("SimpleSignupForm"));
	beforeEach(inject(function($rootScope, $compile) {

		html="";
        html += "<mega-video ";
        html += "   width=\"60%\" ";
        html += "   ogg='" + oggSrc + "'" ;
        html += "   mp4='" + mp4Src + "'>" ;
        html += "</mega-video>";

        scope = $rootScope.$new();
        compiled = $compile(html);
        element = compiled(scope);
        scope.$digest();
	}));
	it('should render the elements correctly', function() {
		expect(element.find('firstName'));
		expect(element.find('lastName'));
		expect(element.find('email'));
	});	
});