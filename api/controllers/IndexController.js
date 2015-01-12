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
        var values = req.allParams();
        Areyouhappy.create({
            ip: req.ip,
            happy: values['answer'] == "Yes" ? true : false,
            why: values['why']

        }, function (data) {
//            console.log(data);
        });
        return res.json({
            data: 'Thanks'
        });
    },
    /**
     * `IndexController.stats()`
     */
    stats: function (req, res) {
        var sad = {} , happy = {};
        Areyouhappy.find({}).exec(function findCB(err, found) {
            while (found.length) {
                var current = found.pop();
                if (current.why.trim() == "") {
                    continue;
                }
                if (current.happy == true) {
                    if (typeof happy[current.why] === "undefined") {
                        happy[current.why] = 1;
                    }
                    happy[current.why]++;
                } else {
                    if (typeof sad[current.why] === "undefined") {
                        sad[current.why] = 1;
                    }
                    sad[current.why]++;
                }
            }
            var data = {};
            data['sad'] = [];
            data['happy'] = [];
            for (var key in sad) {
                data['sad'].push({'text': key, 'weight': sad[key]});
            }
            for (var key in happy) {
                data['happy'].push({'text': key, 'weight': happy[key]});
            }
            return res.json({
                data: data
            });
        });


    }
};

