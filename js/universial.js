$('#six *').click(function() {
    $.sendConfirm({
      title: 'Please comment on this dish.',
      content: '<div id="addIpBox">' + '<div class="frm-item">' + '<div class="frm-label"><span class="requireIcon">*</span> CommentLevel（1-10）:</div>' + '<input type="text" class="frm-input" name="ip" placeholder="1~9">' + '<div class="msg-box j_msgIp hide"></div>' + '</div>' + '<div class="frm-item">' + '<div class="frm-label"><span class="requireIcon">*</span> Advice:</div>' + '<input type="text" class="frm-input" name="desc" placeholder="Up to 25 words">' + '<div class="msg-box j_msgDesc hide"></div>' + '</div>' + '<div class="frm-item">' + '<div class="frm-label"><span class="requireIcon">*</span> Evaluate this canteen.:</div>' + '<input type="text" class="frm-input" name="operator" placeholder="Up to 30 words">' + '<div class="msg-box j_msgOperator hide"></div>' + '</div>' + '</div>',
      button: {
        confirm: 'OK',
        cancel: 'cancel'
      },
      width: 260,
      onBeforeConfirm: function() {
        
        $.sendMsg('The evaluation was successful. Thank you for your advice.', 3000, function() {
      console.log('sendMsg closed');
   
  });
        return false;
      },
      onConfirm: function() {
          $.sendMsg('The evaluation was successful. Thank you for your advice.', 3000, function() {
      console.log('sendMsg closed');
   
  });
      },
      onCancel: function() {
          $.sendMsg('Sorry, the evaluation was unsuccessful.', 3000, function() {
      console.log('sendMsg closed');
   
  });
      },
      onClose: function() {
          $.sendMsg('Sorry, the evaluation was unsuccessful', 3000, function() {
      console.log('sendMsg closed');
   
  });
      }
    });
  });
  $('#order1').click(function() {
    $.sendConfirm({
      withCenter: true,
      title: 'Order transaction confirmation',
      msg: 'Sure Order?',
      button: {
        confirm: 'YES',
        cancel: 'Cancel',
        cancelFirst: true
      },
      onConfirm: function() {
          
    $.sendMsg('Ordering succeeded, and the dishes have been added to the shopping cart.', 3000, function() {
    //First
  
      console.log('sendMsg closed');
      var span = $('#first').html(); 
      
      var picname=span.split("\n")[1].split("src")[1].slice(2,8);
      var dishname=span.split("\n")[2].split(">")[1].split("<")[0].replace(/(^\s+)|(\s+$)/g,"");
      var dishdisc=span.split("\n")[3].split(">")[1].split("<")[0];
      var dishprice=span.split("\n")[4].split(">")[1].split("<")[0];
      var dishnum=span.split("\n")[5].split(">")[1].split("<")[0];
      var db = openDatabase('dishes', '1.0', 'fooddatabase', 30*1024*1024);
      var msg;
      addData(picname, dishname, dishdisc,dishprice,dishnum);
      function addData(picname, dishname, dishdisc,dishprice,dishnum) {
      db.transaction(function(tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS MsgDate(picname TEXT,dishname TEXT,dishdisc TEXT,disprice TEXT,dishnum TEXT)", []);
          tx.executeSql("INSERT INTO MsgDate VALUES (?,?,?,?,?)", [picname, dishname, dishdisc,dishprice,dishnum], function(tx, rs) {
                  
              },
              function(tx, error) {
                  alert(error.source + "::" + error.message);
              }
      )
      })
  }
  });
      },
      onCancel: function() {
          
    $.sendMsg('Order Failed', 3000, function() {
      console.log('sendMsg closed');
  
  });
      },
      onClose: function() {
        
    $.sendMsg('Order Failed', 3000, function() {
      console.log('sendMsg closed');
  
  });
        console.log('click close！');
      }
    });
  });
  $('#order2').click(function() {
    $.sendConfirm({
      withCenter: true,
      title: 'Order transaction confirmation',
      msg: 'Sure Order?',
      button: {
        confirm: 'YES',
        cancel: 'Cancel',
        cancelFirst: true
      },
      onConfirm: function() {
          
    $.sendMsg('Ordering succeeded, and the dishes have been added to the shopping cart.', 3000, function() {
    console.log('sendMsg closed');
    console.log('sendMsg closed');
      var span = $('#second').html(); 
      
      var picname=span.split("\n")[1].split("src")[1].slice(2,8);
      var dishname=span.split("\n")[2].split(">")[1].split("<")[0].replace(/(^\s+)|(\s+$)/g,"");
      var dishdisc=span.split("\n")[3].split(">")[1].split("<")[0];
      var dishprice=span.split("\n")[4].split(">")[1].split("<")[0];
      var dishnum=span.split("\n")[5].split(">")[1].split("<")[0];
      var db = openDatabase('dishes', '1.0', 'fooddatabase', 30*1024*1024);
      var msg;
      addData(picname, dishname, dishdisc,dishprice,dishnum);
      function addData(picname, dishname, dishdisc,dishprice,dishnum) {
      db.transaction(function(tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS MsgDate(picname TEXT,dishname TEXT,dishdisc TEXT,disprice TEXT,dishnum TEXT)", []);
          tx.executeSql("INSERT INTO MsgDate VALUES (?,?,?,?,?)", [picname, dishname, dishdisc,dishprice,dishnum], function(tx, rs) {
                  
              },
              function(tx, error) {
                  alert(error.source + "::" + error.message);
              }
      )
      })
  }
   
  });
      },
      onCancel: function() {
          
    $.sendMsg('Order Failed', 3000, function() {
      console.log('sendMsg closed');
  
  });
      },
      onClose: function() {
        
    $.sendMsg('Order Failed', 3000, function() {
      console.log('sendMsg closed');
  
  });
        console.log('click close！');
      }
    });
  });
  $('#order3').click(function() {
    $.sendConfirm({
      withCenter: true,
      title: 'Order transaction confirmation',
      msg: 'Sure Order?',
      button: {
        confirm: 'YES',
        cancel: 'Cancel',
        cancelFirst: true
      },
      onConfirm: function() {
          
    $.sendMsg('Ordering succeeded, and the dishes have been added to the shopping cart.', 3000, function() {
      console.log('sendMsg closed');
      var span = $('#third').html(); 
      
      var picname=span.split("\n")[1].split("src")[1].slice(2,8);
      var dishname=span.split("\n")[2].split(">")[1].split("<")[0].replace(/(^\s+)|(\s+$)/g,"");
      var dishdisc=span.split("\n")[3].split(">")[1].split("<")[0];
      var dishprice=span.split("\n")[4].split(">")[1].split("<")[0];
      var dishnum=span.split("\n")[5].split(">")[1].split("<")[0];
      var db = openDatabase('dishes', '1.0', 'fooddatabase', 30*1024*1024);
      var msg;
      addData(picname, dishname, dishdisc,dishprice,dishnum);
      function addData(picname, dishname, dishdisc,dishprice,dishnum) {
      db.transaction(function(tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS MsgDate(picname TEXT,dishname TEXT,dishdisc TEXT,disprice TEXT,dishnum TEXT)", []);
          tx.executeSql("INSERT INTO MsgDate VALUES (?,?,?,?,?)", [picname, dishname, dishdisc,dishprice,dishnum], function(tx, rs) {
                  
              },
              function(tx, error) {
                  alert(error.source + "::" + error.message);
              }
      )
      })
  }
   
  });
      },
      onCancel: function() {
          
    $.sendMsg('Order Failed', 3000, function() {
      console.log('sendMsg closed');
  
  });
      },
      onClose: function() {
        
    $.sendMsg('Order Failed', 3000, function() {
      console.log('sendMsg closed');
  
  });
        console.log('click close！');
      }
    });
  });
  $('#order4').click(function() {
    $.sendConfirm({
      withCenter: true,
      title: 'Order transaction confirmation',
      msg: 'Sure Order?',
      button: {
        confirm: 'YES',
        cancel: 'Cancel',
        cancelFirst: true
      },
      onConfirm: function() {
          
    $.sendMsg('Ordering succeeded, and the dishes have been added to the shopping cart.', 3000, function() {
      console.log('sendMsg closed');
      var span = $('#fourth').html(); 
      
      var picname=span.split("\n")[1].split("src")[1].slice(2,8);
      var dishname=span.split("\n")[2].split(">")[1].split("<")[0].replace(/(^\s+)|(\s+$)/g,"");
      var dishdisc=span.split("\n")[3].split(">")[1].split("<")[0];
      var dishprice=span.split("\n")[4].split(">")[1].split("<")[0];
      var dishnum=span.split("\n")[5].split(">")[1].split("<")[0];
      var db = openDatabase('dishes', '1.0', 'fooddatabase', 30*1024*1024);
      var msg;
      addData(picname, dishname, dishdisc,dishprice,dishnum);
      function addData(picname, dishname, dishdisc,dishprice,dishnum) {
      db.transaction(function(tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS MsgDate(picname TEXT,dishname TEXT,dishdisc TEXT,disprice TEXT,dishnum TEXT)", []);
          tx.executeSql("INSERT INTO MsgDate VALUES (?,?,?,?,?)", [picname, dishname, dishdisc,dishprice,dishnum], function(tx, rs) {
                  
              },
              function(tx, error) {
                  alert(error.source + "::" + error.message);
              }
      )
      })
  }
   
  });
      },
      onCancel: function() {
          
    $.sendMsg('Order Failed', 3000, function() {
      console.log('sendMsg closed');
  
  });
      },
      onClose: function() {
        
    $.sendMsg('Order Failed', 3000, function() {
      console.log('sendMsg closed');
  
  });
        console.log('click close！');
      }
    });
  });
  $('#order5').click(function() {
    $.sendConfirm({
      withCenter: true,
      title: 'Order transaction confirmation',
      msg: 'Sure Order?',
      button: {
        confirm: 'YES',
        cancel: 'Cancel',
        cancelFirst: true
      },
      onConfirm: function() {
          
    $.sendMsg('Ordering succeeded, and the dishes have been added to the shopping cart.', 3000, function() {
      console.log('sendMsg closed');
      var span = $('#fifth').html(); 
      
      var picname=span.split("\n")[1].split("src")[1].slice(2,8);
      var dishname=span.split("\n")[2].split(">")[1].split("<")[0].replace(/(^\s+)|(\s+$)/g,"");
      var dishdisc=span.split("\n")[3].split(">")[1].split("<")[0];
      var dishprice=span.split("\n")[4].split(">")[1].split("<")[0];
      var dishnum=span.split("\n")[5].split(">")[1].split("<")[0];
      var db = openDatabase('dishes', '1.0', 'fooddatabase', 30*1024*1024);
      var msg;
      addData(picname, dishname, dishdisc,dishprice,dishnum);
      function addData(picname, dishname, dishdisc,dishprice,dishnum) {
      db.transaction(function(tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS MsgDate(picname TEXT,dishname TEXT,dishdisc TEXT,disprice TEXT,dishnum TEXT)", []);
          tx.executeSql("INSERT INTO MsgDate VALUES (?,?,?,?,?)", [picname, dishname, dishdisc,dishprice,dishnum], function(tx, rs) {
                  
              },
              function(tx, error) {
                  alert(error.source + "::" + error.message);
              }
      )
      })
  }
   
  });
      },
      onCancel: function() {
          
    $.sendMsg('Order Failed', 3000, function() {
      console.log('sendMsg closed');
  
  });
      },
      onClose: function() {
        
    $.sendMsg('Order Failed', 3000, function() {
      console.log('sendMsg closed');
  
  });
        console.log('click close！');
      }
    });
  });
  $('#order6').click(function() {
    $.sendConfirm({
      withCenter: true,
      title: 'Order transaction confirmation',
      msg: 'Sure Order?',
      button: {
        confirm: 'YES',
        cancel: 'Cancel',
        cancelFirst: true
      },
      onConfirm: function() {
          
    $.sendMsg('Ordering succeeded, and the dishes have been added to the shopping cart.', 3000, function() {
      
  
      console.log('sendMsg closed');
      var span = $('#sixth').html(); 
      
      var picname=span.split("\n")[1].split("src")[1].slice(2,8);
      var dishname=span.split("\n")[2].split(">")[1].split("<")[0].replace(/(^\s+)|(\s+$)/g,"");
      var dishdisc=span.split("\n")[3].split(">")[1].split("<")[0];
      var dishprice=span.split("\n")[4].split(">")[1].split("<")[0];
      var dishnum=span.split("\n")[5].split(">")[1].split("<")[0];
      var db = openDatabase('dishes', '1.0', 'fooddatabase', 30*1024*1024);
      var msg;
      addData(picname, dishname, dishdisc,dishprice,dishnum);
      function addData(picname, dishname, dishdisc,dishprice,dishnum) {
      db.transaction(function(tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS MsgDate(picname TEXT,dishname TEXT,dishdisc TEXT,disprice TEXT,dishnum TEXT)", []);
          tx.executeSql("INSERT INTO MsgDate VALUES (?,?,?,?,?)", [picname, dishname, dishdisc,dishprice,dishnum], function(tx, rs) {
                  
              },
              function(tx, error) {
                  alert(error.source + "::" + error.message);
              }
      )
      })
  }
  });
      },
      onCancel: function() {
          
    $.sendMsg('Order Failed', 3000, function() {
      console.log('sendMsg closed');
  
  });
      },
      onClose: function() {
        
    $.sendMsg('Order Failed', 3000, function() {
      console.log('sendMsg closed');
  
  });
        console.log('click close！');
      }
    });
  });
  $('#order7').click(function() {
    $.sendConfirm({
      withCenter: true,
      title: 'Order transaction confirmation',
      msg: 'Sure Order',
      button: {
        confirm: 'YES',
        cancel: 'Cancel',
        cancelFirst: true
      },
      onConfirm: function() {
          
    $.sendMsg('Ordering succeeded, and the dishes have been added to the shopping cart.', 3000, function() {
    console.log('sendMsg closed');
    console.log('sendMsg closed');
      var span = $('#seventh').html(); 
      
      var picname=span.split("\n")[1].split("src")[1].slice(2,8);
      var dishname=span.split("\n")[2].split(">")[1].split("<")[0].replace(/(^\s+)|(\s+$)/g,"");
      var dishdisc=span.split("\n")[3].split(">")[1].split("<")[0];
      var dishprice=span.split("\n")[4].split(">")[1].split("<")[0];
      var dishnum=span.split("\n")[5].split(">")[1].split("<")[0];
      var db = openDatabase('dishes', '1.0', 'fooddatabase', 30*1024*1024);
      var msg;
      addData(picname, dishname, dishdisc,dishprice,dishnum);
      function addData(picname, dishname, dishdisc,dishprice,dishnum) {
      db.transaction(function(tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS MsgDate(picname TEXT,dishname TEXT,dishdisc TEXT,disprice TEXT,dishnum TEXT)", []);
          tx.executeSql("INSERT INTO MsgDate VALUES (?,?,?,?,?)", [picname, dishname, dishdisc,dishprice,dishnum], function(tx, rs) {
                 
              },
              function(tx, error) {
                  alert(error.source + "::" + error.message);
              }
      )
      })
  }
   
  });
      },
      onCancel: function() {
          
    $.sendMsg('Order Failed', 3000, function() {
      console.log('sendMsg closed');
  
  });
      },
      onClose: function() {
        
    $.sendMsg('Order Failed', 3000, function() {
      console.log('sendMsg closed');
  
  });
        console.log('click close！');
      }
    });
  });
  $('#order8').click(function() {
    $.sendConfirm({
      withCenter: true,
      title: 'Order transaction confirmation',
      msg: 'Sure Order？',
      button: {
        confirm: 'YES',
        cancel: 'Cancel',
        cancelFirst: true
      },
      onConfirm: function() {
          
    $.sendMsg('Ordering succeeded, and the dishes have been added to the shopping cart.', 3000, function() {
      console.log('sendMsg closed');
      var span = $('#eighth').html(); 
      
      var picname=span.split("\n")[1].split("src")[1].slice(2,8);
      var dishname=span.split("\n")[2].split(">")[1].split("<")[0].replace(/(^\s+)|(\s+$)/g,"");
      var dishdisc=span.split("\n")[3].split(">")[1].split("<")[0];
      var dishprice=span.split("\n")[4].split(">")[1].split("<")[0];
      var dishnum=span.split("\n")[5].split(">")[1].split("<")[0];
      var db = openDatabase('dishes', '1.0', 'fooddatabase', 30*1024*1024);
      var msg;
      addData(picname, dishname, dishdisc,dishprice,dishnum);
      function addData(picname, dishname, dishdisc,dishprice,dishnum) {
      db.transaction(function(tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS MsgDate(picname TEXT,dishname TEXT,dishdisc TEXT,disprice TEXT,dishnum TEXT)", []);
          tx.executeSql("INSERT INTO MsgDate VALUES (?,?,?,?,?)", [picname, dishname, dishdisc,dishprice,dishnum], function(tx, rs) {
                 
              },
              function(tx, error) {
                  alert(error.source + "::" + error.message);
              }
      )
      })
  }
   
  });
      },
      onCancel: function() {
          
    $.sendMsg('Order Failed', 3000, function() {
      console.log('sendMsg closed');
  
  });
      },
      onClose: function() {
        
    $.sendMsg('Order Failed', 3000, function() {
      console.log('sendMsg closed');
  
  });
        console.log('click close！');
      }
    });
  });
  $('#order9').click(function() {
    $.sendConfirm({
      withCenter: true,
      title: 'Order transaction confirmation',
      msg: 'Sure Order？',
      button: {
        confirm: 'YES',
        cancel: 'Cancel',
        cancelFirst: true
      },
      onConfirm: function() {
          
    $.sendMsg('Ordering succeeded, and the dishes have been added to the shopping cart.', 3000, function() {
      console.log('sendMsg closed');
      var span = $('#ninth').html(); 
      
      var picname=span.split("\n")[1].split("src")[1].slice(2,8);
      var dishname=span.split("\n")[2].split(">")[1].split("<")[0].replace(/(^\s+)|(\s+$)/g,"");
      var dishdisc=span.split("\n")[3].split(">")[1].split("<")[0];
      var dishprice=span.split("\n")[4].split(">")[1].split("<")[0];
      var dishnum=span.split("\n")[5].split(">")[1].split("<")[0];
      var db = openDatabase('dishes', '1.0', 'fooddatabase', 30*1024*1024);
      var msg;
      addData(picname, dishname, dishdisc,dishprice,dishnum);
      function addData(picname, dishname, dishdisc,dishprice,dishnum) {
      db.transaction(function(tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS MsgDate(picname TEXT,dishname TEXT,dishdisc TEXT,disprice TEXT,dishnum TEXT)", []);
          tx.executeSql("INSERT INTO MsgDate VALUES (?,?,?,?,?)", [picname, dishname, dishdisc,dishprice,dishnum], function(tx, rs) {
                  
              },
              function(tx, error) {
                  alert(error.source + "::" + error.message);
              }
      )
      })
  }
   
  });
      },
      onCancel: function() {
          
    $.sendMsg('Order Failed', 3000, function() {
      console.log('sendMsg closed');
  
  });
      },
      onClose: function() {
        
    $.sendMsg('Order Failed', 3000, function() {
      console.log('sendMsg closed');
  
  });
        console.log('click close！');
      }
    });
  });
  $('#order10').click(function() {
    $.sendConfirm({
      withCenter: true,
      title: 'Order transaction confirmation',
      msg: 'Sure Order？',
      button: {
        confirm: 'YES',
        cancel: 'cancel',
        cancelFirst: true
      },
      onConfirm: function() {
          
    $.sendMsg('Ordering succeeded, and the dishes have been added to the shopping cart.', 3000, function() {
      console.log('sendMsg closed');
      var span = $('#tenth').html(); 
      
      var picname=span.split("\n")[1].split("src")[1].slice(2,8);
      var dishname=span.split("\n")[2].split(">")[1].split("<")[0].replace(/(^\s+)|(\s+$)/g,"");
      var dishdisc=span.split("\n")[3].split(">")[1].split("<")[0];
      var dishprice=span.split("\n")[4].split(">")[1].split("<")[0];
      var dishnum=span.split("\n")[5].split(">")[1].split("<")[0];
      var db = openDatabase('dishes', '1.0', 'fooddatabase', 30*1024*1024);
      var msg;
      addData(picname, dishname, dishdisc,dishprice,dishnum);
      function addData(picname, dishname, dishdisc,dishprice,dishnum) {
      db.transaction(function(tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS MsgDate(picname TEXT,dishname TEXT,dishdisc TEXT,disprice TEXT,dishnum TEXT)", []);
          tx.executeSql("INSERT INTO MsgDate VALUES (?,?,?,?,?)", [picname, dishname, dishdisc,dishprice,dishnum], function(tx, rs) {
                  
              },
              function(tx, error) {
                  alert(error.source + "::" + error.message);
              }
      )
      })
  }
   
  });
      },
      onCancel: function() {
          
    $.sendMsg('Order Failed', 3000, function() {
      console.log('sendMsg closed');
  
  });
      },
      onClose: function() {
        
    $.sendMsg('Order Failed', 3000, function() {
      console.log('sendMsg closed');
  
  });
        console.log('click close！');
      }
    });
});