$(document).ready(function(){

    var type_list = document.getElementById('type_list');
    type_list.options[0] = new Option('--Select--', '');
    type_list.options[1] = new Option('Toprope', 'toprope');
    type_list.options[2] = new Option('Sport', 'sport');
    type_list.options[3] = new Option('Trad', 'trad');
    type_list.options[4] = new Option('Boulder', 'boulder');

    var grade_list = document.getElementById('grade_list');
    grade_list.options[0] = new Option('--Select Type First--', '');

    var climber_list = document.getElementById('climber_list');
    climber_list.options[0] = new Option('--Select--', '');
    climber_list.options[1] = new Option('Bart', 'bart');
    climber_list.options[2] = new Option('Lisa', 'lisa');

    var sendtype_list = document.getElementById('sendtype_list');
    sendtype_list.options[0] = new Option('--Select--', '');
    sendtype_list.options[1] = new Option('Redpoint', 'redpoint');
    sendtype_list.options[2] = new Option('Flash', 'flash');
    sendtype_list.options[3] = new Option('Onsight', 'onsight');

    $( "#date" ).datepicker({
                dateFormat: "yy-mm-dd"
                //showAnim: "slideDown"
    });

    $('#type_list').on('click', function getGrade() {
     
                var type_list = document.getElementById('type_list');
                //type_list.remove("type_list.0");
                var grade_list = document.getElementById("grade_list");
                var list1SelectedValue = type_list.options[type_list.selectedIndex].value;
                 
                if (list1SelectedValue=='boulder')
                {
                     
                    grade_list.options.length=0;
                    grade_list.options[0] = new Option('V0', 'v0');
                    grade_list.options[1] = new Option('V1', 'v1');
                    grade_list.options[2] = new Option('V2', 'v2');
                    grade_list.options[3] = new Option('V3', 'v3');
                    grade_list.options[4] = new Option('V4', 'v4');
                    grade_list.options[5] = new Option('V5', 'v5');
                    grade_list.options[6] = new Option('V6', 'v6');
                    grade_list.options[7] = new Option('V7', 'v7');
                    grade_list.options[8] = new Option('V8', 'v8');
                    grade_list.options[9] = new Option('V9', 'v9');
                    grade_list.options[10] = new Option('V10', 'v10');
                     
                }
                else
                {
                     
                    grade_list.options.length=0;
                    grade_list.options[0] = new Option('--Select--', '');
                    grade_list.options[1] = new Option('5.5', '5.5');
                    grade_list.options[2] = new Option('5.6', '5.6');
                    grade_list.options[3] = new Option('5.7', '5.7');
                    grade_list.options[4] = new Option('5.8', '5.8');
                    grade_list.options[5] = new Option('5.9', '5.9');
                    grade_list.options[6] = new Option('5.10', '5.10');
                    grade_list.options[7] = new Option('5.10-', '5.10-');
                    grade_list.options[8] = new Option('5.10+', '5.10%2b');
                    grade_list.options[9] = new Option('5.10a', '5.10a');
                    grade_list.options[10] = new Option('5.10b', '5.10b');
                    grade_list.options[11] = new Option('5.10c', '5.10c');
                    grade_list.options[12] = new Option('5.10d', '5.10d');
                    grade_list.options[13] = new Option('5.11', '5.11');
                    grade_list.options[14] = new Option('5.11-', '5.11-');
                    grade_list.options[15] = new Option('5.11+', '5.11%2b');
                    grade_list.options[16] = new Option('5.11a', '5.11a');
                    grade_list.options[17] = new Option('5.11b', '5.11b');
                    grade_list.options[18] = new Option('5.11c', '5.11c');
                    grade_list.options[19] = new Option('5.11d', '5.11d');
                    grade_list.options[20] = new Option('5.12', '5.12');
                    grade_list.options[21] = new Option('5.12-', '5.12-');
                    grade_list.options[22] = new Option('5.12+', '5.12%2b');
                    grade_list.options[23] = new Option('5.12a', '5.12a');
                    grade_list.options[24] = new Option('5.12b', '5.12b');
                    grade_list.options[25] = new Option('5.12c', '5.12c');
                    grade_list.options[26] = new Option('5.12d', '5.12d');
                     
                }
    });
    
    if(! count) {
        var count = 0;
    }


    $(document).on('submit', '#form_go', function(e) {
	e.preventDefault();
        function incrementCount() {
                count++;
        }
	var date = $('#date').val();
	if (!date) {
                document.getElementsByName('date')[0].placeholder='Please Input a Date';
                document.getElementById("date").classList.add('fail');
                document.getElementById("date").scrollIntoView(false);
                return false;
        }
        var grade = $('#grade_list').val();
        var color = $('#color').val();
	var color = color.toLowerCase();
        var setter = $('#setter').val();
	var setter = setter.toLowerCase();
        var type = $('#type_list').val();
        var location = $('#location').val();
        var location = location.toLowerCase();
	var name = $('#climbname').val();
        var climber = $('#climber_list').val();
        var send = $('#sendtype_list').val();
	var message = $('#message').val();
        var dataString = '&grade=' + grade + '&color=' + color + '&setter=' + setter + '&type=' + type + '&location=' + location + '&name=' + name + '&climber=' + climber  + '&send=' + send + '&date=' + date + '&message=' + message;
	console.log(dataString);
        $.ajax({
            type: "POST",
            url: "script/insert.php",
            data: dataString,
            success: function() {
                document.getElementById("submit-results").style.opacity = 1;
                 //alert('you did the thing!!')
                incrementCount()
                document.getElementById("submit-results").innerHTML = "Number of routes submited " + count;
            }
	});
    });
});

