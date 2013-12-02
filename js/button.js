$(document).ready(function() {

  // CSSで非表示にした1行目の行を複製し、その行の下に挿入
  $("#worker > p").clone(true).insertAfter($("#worker_p"));

  // 行を追加する
  $(document).on("click", ".addList", function() {
    $("#worker > p").eq(0).clone(true).insertAfter(
      $(this).parent()
    );
    
    $(".removeList").prop('disabled', false);
  });

  // 行を削除する
  $(document).on("click", ".removeList", function() {

    $(this).parent().empty();
    
  if ($("#worker input").length > 4) {
    $(".removeList").prop('disabled', false);
   }else{
    $(".removeList").prop('disabled', true);
    }
  });

});
