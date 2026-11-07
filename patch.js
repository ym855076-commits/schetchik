/* Правки для «Счётчика расходов»: подтверждение удаления и защита поля суммы */
(function () {
  /* 1. Спрашиваем перед удалением траты (срабатывает раньше самого приложения) */
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.btn-delete');
    if (!b) return;
    if (!window.confirm('Удалить эту трату?')) {
      e.stopPropagation();
      e.preventDefault();
    }
  }, true);

  /* 2. В сумме только один разделитель и не больше 2 знаков после него */
  document.addEventListener('DOMContentLoaded', function () {
    var el = document.getElementById('amountInput');
    if (!el) return;
    el.addEventListener('input', function () {
      var v = el.value, i = v.search(/[.,]/);
      if (i > -1) v = v.slice(0, i + 1) + v.slice(i + 1).replace(/[.,]/g, '').slice(0, 2);
      if (v !== el.value) el.value = v;
    });
  });
})();
