const stepByStepForm = {
    questions: [
        {
            title: "فرزند شما چند سال دارد؟",
            options: [
                { text: "8-12 سال", id: "q1-1" },
                { text: "12-15 سال", id: "q1-2" },
                { text: "15-18 سال", id: "q1-3" },
            ],
            conditionToShow: [""]
        },
        {
            title: "آیا فرزند شما با مفاهیم پایه کامپیوتر (ICDL) آشناست؟",
            options: [
                { text: "بله", id: "q2-1" },
                { text: "خیر", id: "q2-2" },
            ],
            conditionToShow: ["q1-1", "q1-2", "q1-3"]
        },
        {
            title: "آیا فرزند شما با اسکرچ آشنایی دارد؟",
            options: [
                { text: "بله، اسکرچ ۱ را بلدم", id: "q3-1" },
                { text: "بله، اسکرچ ۲ را بلدم", id: "q3-2" },
                { text: "خیر، اصلاً برنامه‌نویسی بلد نیستم", id: "q3-3" },
            ],
            conditionToShow: ["q1-1q2-1"]
        },
        {
            title: "کدام یک از این سطوح را بلد هستید؟",
            options: [
                { text: "پایتون ۱ (مقدماتی)", id: "q4-1" },
                { text: "پایتون ۲ (پیشرفته)", id: "q4-2" },
                { text: "پایتون ۳ (پروژه محور)", id: "q4-3" },
                { text: "بلد نیستم", id: "q4-4" },
            ],
            conditionToShow: ["q1-1q2-1q3-2"]
        },
        {
            title: "آیا فرزند شما برنامه‌نویسی بلد است؟",
            options: [
                { text: "بله (پایتون یا طراحی سایت)", id: "q5-1" },
                { text: "خیر", id: "q5-2" },
            ],
            conditionToShow: ["q1-2q2-1" , "q1-3q2-1"]
        },
        {
            title: "انتخاب سطح پایتون",
            options: [
                { text: "پایتون 1", id: "q6-1" },
                { text: "پایتون 2", id: "q6-2" },
                { text: "پایتون 3", id: "q6-3" },
            ],
            conditionToShow: ["q1-2q2-1q5-1" , "q1-3q2-1q5-1"]
        },
        {
            title: "سطح آشنایی با طراحی سایت",
            options: [
                { text: "HTML & CSS", id: "q7-1" },
                { text: "WordPress", id: "q7-2" },
                { text: "Bootstrap & JavaScript", id: "q7-3" },
            ],
            conditionToShow: ["q1-2q2-1q5-1q6-1" , "q1-2q2-1q5-1q6-2" , "q1-2q2-1q5-1q6-3" , "q1-3q2-1q5-1q6-1" , "q1-3q2-1q5-1q6-2" , "q1-3q2-1q5-1q6-3"]
        },
        {
            title: "دوره WordPress",
            final : true,
            conditionToShow: ["q1-2q2-1q5-1q6-1q7-1" , "q1-2q2-1q5-1q6-2q7-1" , "q1-2q2-1q5-1q6-3q7-1" , "q1-3q2-1q5-1q6-1q7-1" , "q1-3q2-1q5-1q6-2q7-1" , "q1-3q2-1q5-1q6-3q7-1"]
        },
        {
            title: "دوره Bootstrap & JavaScript",
            final : true,
            conditionToShow: ["q1-2q2-1q5-1q6-1q7-2" , "q1-2q2-1q5-1q6-2q7-2" , "q1-2q2-1q5-1q6-3q7-2" , "q1-3q2-1q5-1q6-1q7-2" , "q1-3q2-1q5-1q6-2q7-2" , "q1-3q2-1q5-1q6-3q7-2"]
        },
        ,
        {
            title: "دوره React.js",
            final : true,
            conditionToShow: ["q1-2q2-1q5-1q6-1q7-3" , "q1-2q2-1q5-1q6-2q7-3" , "q1-2q2-1q5-1q6-3q7-3" , "q1-3q2-1q5-1q6-1q7-3" , "q1-3q2-1q5-1q6-2q7-3" , "q1-3q2-1q5-1q6-3q7-3"]
        },
        {
            title: "دوره طراحی سایت",
            final : true,
            conditionToShow: ["q1-2q2-1q5-2" , "q1-3q2-1q5-2"]
        },
        {
            title: "دوره پایتون 1",
            final : true,
            conditionToShow: ["q1-1q2-1q3-2q4-4" , "q1-2q2-1q5-2" , "q1-3q2-1q5-2"]
        },
        {
            title: "دوره پایتون 2",
            final : true,
            conditionToShow: ["q1-1q2-1q3-2q4-1" , "q1-2q2-1q5-1q6-1q7-1" , "q1-2q2-1q5-1q6-1q7-2" , "q1-2q2-1q5-1q6-1q7-3" , "q1-3q2-1q5-1q6-1q7-1" , "q1-3q2-1q5-1q6-1q7-2" , "q1-3q2-1q5-1q6-1q7-3"]
        },
        {
            title: "دوره پایتون 3",
            final : true,
            conditionToShow: ["q1-1q2-1q3-2q4-2" , "q1-2q2-1q5-1q6-2q7-1" , "q1-2q2-1q5-1q6-2q7-2" , "q1-2q2-1q5-1q6-2q7-3" , "q1-3q2-1q5-1q6-2q7-1" , "q1-3q2-1q5-1q6-2q7-2" , "q1-3q2-1q5-1q6-2q7-3"]
        },
        {
            title: "هوش مصنوعی مقدماتی",
            final : true,
            conditionToShow: ["q1-1q2-1q3-2q4-3" , "q1-2q2-1q5-1q6-3q7-1" , "q1-2q2-1q5-1q6-3q7-2" , "q1-2q2-1q5-1q6-3q7-3" , "q1-3q2-1q5-1q6-3q7-1" , "q1-3q2-1q5-1q6-3q7-2" , "q1-3q2-1q5-1q6-3q7-3"]
        },
        {
            title: "دوره اسکرچ 2",
            final : true,
            conditionToShow: ["q1-1q2-1q3-1"]
        },
        {
            title: "دوره ICDL کودکان",
            final : true,
            conditionToShow: ["q1-1q2-2"]
        },
        {
            title: "دوره ICDL",
            final : true,
            conditionToShow: ["q1-2q2-2" ,"q1-3q2-2"]
        },
        {
            title: "دوره اسکرچ 1",
            final : true,
            conditionToShow: ["q1-1q2-1q3-3"]
        },
        
    ],
    answers: "",
    prevAnswers : []
}

$('#prevBtn').on('click' , ()=>{
    const prevAnswer = stepByStepForm.prevAnswers.pop();
    stepByStepForm.answers =  prevAnswer ? prevAnswer : "";
    renderQuestion();
})
const renderQuestion = () => {
    $('#title').text('');
    document.querySelector('#questions-section').innerHTML = '';

    stepByStepForm.questions.forEach(({ title, options, conditionToShow, link, final } , QuestionIndex) => {
        conditionToShow.forEach(condition => {
            if (condition === stepByStepForm.answers) {
                if (final) {
                    alert(title)
                }
                else{
                    $('#title').text(title);
                    options.forEach(({ text, id , selected}) => {
                        const div = $('<div>').text(text).addClass('item').on('click', function() {
                            stepByStepForm.prevAnswers.push(stepByStepForm.answers);
                            stepByStepForm.answers += id;
                            stepByStepForm.questions[QuestionIndex].options.forEach((option)=>{
                                if(option.id === id){
                                    option.selected = true;
                                }
                                else{
                                    option.selected = false;
                                }
                            })
                            $(this).addClass('active');
                            // $(this).siblings('.item').removeClass('active');
                            setTimeout(() => {
                                renderQuestion();
                            }, 500);
                        });
                        if(selected) {
                            $(div).addClass('active');
                        }
                        $('#questions-section').append(div);
                    })
                }
            }
        })
    })
}
renderQuestion()

