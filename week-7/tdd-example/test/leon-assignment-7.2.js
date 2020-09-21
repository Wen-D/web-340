/*
=========================================
; Title:  TDD in Action
; Author: Professor Krasso
; Modified by: Wendy Leon
; Date:  Sept 20 2020
; Description: TDD in Action
;=======================================
*/

var assert = require("assert");
describe ("String#split", function(){
    it("shpuld return an array of fruits", function (){
        assert(Array.isArray('Apple,Orange,Mango'.split(',')));
    });
});


