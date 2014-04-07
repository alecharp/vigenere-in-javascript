'use strict';

describe('Vigenere Service', function() {
	var vigenere;

	beforeEach(module('ng.vigenere'));
	beforeEach(inject(function($vigenere) {
		vigenere = $vigenere;
	}));

	it('should describe encryption using vigenere', function() {
		var clear = 'j\'adore ecouter la radio toute la journee';
		expect(vigenere.encrypt('MUSIQUE', clear)).toBe('V\'UVWHY IOIMBUL PM LSLYI XAOLM BU NAOJVUY');
	});

	it('should describe decryption using vigenere', function() {
		var crypted = 'V\'UVWHY IOIMBUL PM LSLYI XAOLM BU NAOJVUY';
		expect(vigenere.decrypt('MUSIQUE', crypted)).toBe('j\'adore ecouter la radio toute la journee');
	});
});
