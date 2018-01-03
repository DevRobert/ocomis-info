const lab = exports.lab = require('lab').script()
const { beforeEach, describe, it } = lab
const { expect } = require('code')
const Server = require('../../')

describe('BasicController', () => {
    describe('GET /info', () => {
        let response

        beforeEach(async () => {
            // Act

            response = await Server.inject({
                method: 'GET',
                url: '/info'
            })
        })

        it('should return OK', () => {
            expect(response.statusCode).equals(200)
        })

        it('should return a value for the current time', () => {
            expect(response.result).instanceOf(Object)
            expect(response.result.time).not.empty()
        })

        it('should return an info string', () => {
            expect(response.result).instanceOf(Object)
            expect(response.result.service).equals('Ocomis Info Service')
        })
    })
})
