'use strict';

describe('Vigenere Service', function() {
	var vigenere;

	beforeEach(module('ng.vigenere'));
	beforeEach(inject(function($vigenere) {
		vigenere = $vigenere;
	}));

	it('should describe encryption using vigenere', function() {
		var clear = 'j\'adore ecouter la radio toute la journee';
		expect(vigenere.encrypt('MUSIQUE', clear)).toBe('v\'uvwhy ioimbul pm lslyi xaolm bu naojvuy');
	});

	it('should describe decryption using vigenere', function() {
		var crypted = 'v\'uvwhy ioimbul pm lslyi xaolm bu naojvuy';
		expect(vigenere.decrypt('MUSIQUE', crypted)).toBe('j\'adore ecouter la radio toute la journee');
	});

	it('should keep case while encryption', function() {
		var clearText = 'BonJour!? Je NE penSe pas TrouvER';
		expect(vigenere.encrypt('MOTCLE', clearText)).toBe('NcgLzyd!? Xx PP tqbLg aee HkqfzQF');
		expect(vigenere.encrypt('motcle', clearText)).toBe('NcgLzyd!? Xx PP tqbLg aee HkqfzQF');
		expect(vigenere.encrypt('MoTCLe', clearText)).toBe('NcgLzyd!? Xx PP tqbLg aee HkqfzQF');
	});

	it('should keep case while decryption', function() {
		var clearText = 'NcgLzyd!? Xx PP tqbLg aee HkqfzQF';
		expect(vigenere.decrypt('MOTCLE', clearText)).toBe('BonJour!? Je NE penSe pas TrouvER');
		expect(vigenere.decrypt('motcle', clearText)).toBe('BonJour!? Je NE penSe pas TrouvER');
		expect(vigenere.decrypt('MoTCLe', clearText)).toBe('BonJour!? Je NE penSe pas TrouvER');
	});
});
