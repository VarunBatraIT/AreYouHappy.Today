/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {



    /**
     * `IndexController.question()`
     */
    question: function (req, res) {
        return res.view('homepage')
    },


    /**
     * `IndexController.answer()`
     */
    answer: function (req, res) {
        return res.json({
            data: 'Thanks'
        });
    }
};

