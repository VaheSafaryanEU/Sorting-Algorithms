(defun insert (x l)
  (if (or (null l) (< x (car l)))
      (cons x l)
      (cons (car l) (insert x (cdr l)))))

(defun insertion-sort (a)
  (if (null a)
      nil
      (insert (car a) (insertion-sort (cdr a)))))

(print (insertion-sort '(34 7 23 32 5 62)))

