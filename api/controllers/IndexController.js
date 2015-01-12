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
        Areyouhappy.new({
            ip: req.ip
        });
        return res.json({
            data: 'Thanks'
        });
    },
    /**
     * `IndexController.stats()`
     */
    stats: function (req, res) {

        return res.json({
            data: {
                sad: [
                    {text: "pluto", weight: 15},
                    {text: "job", weight: 9},
                    {text: "girlfriend", weight: 6}
                ], happy: [
                    {text: "vivek", weight: 15},
                    {text: "new job", weight: 9},
                    {text: "breakup", weight: 6}
                ]
            }
        });
    }
};

