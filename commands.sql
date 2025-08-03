Script started on 2025-08-03 14:28:19+03:00 [TERM="xterm-256color" TTY="/dev/pts/0" COLUMNS="129" LINES="81"]
bash: # ~/.bashrc: executed by bash(1) for non-login shells.
# see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)
# for examples

# If not running interactively, dont: No such file or directory
[?2004h]0;kirillos@YogaKi: ~/courses/Part13_SQL[01;32mkirillos@YogaKi[00m:[01;34m~/courses/Part13_SQL[00m$ script commands.sqls commands.sqlflyctl proxy 5432 -a nonmongosudo systemctl stop postgresql[1Pflyctl proxy 5432 -a nonmongosudo systemctl stop postgresql[1Pflyctl proxy 5432 -a nonmongo-db[K pg create --name nonmongo --initial-cluster-size 3 --region arn[2Ptestdb[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[2@nonmongo[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[38Pctl proxy 5432 -a nonmongo-db[Ksudo systemctl stop postgresql[1Pflyctl proxy 5432 -a nonmongo[9Pscripts commands.sql[1P commands.sql[Kscript commands.sqls commands.sqlflyctl proxy 5432 -a nonmongo[9Pscripts commands.sql[1P commands.sql[K[7mflyctl postgres connect -a nonmongo[27mflyctl postgres connect -a nonmongo
[?2004l
Unmanaged Fly Postgres is not supported by Fly.io Support and users are responsible for operations, management, and disaster recovery. If you'd like a managed, supported solution, try 'fly mpg' (Managed Postgres).
Please visit https://fly.io/docs/mpg/overview/ for more information about Managed Postgres.

[?25l[KConnecting to fdaa:8:74c3:a7b:e7:8c67:2d54:2...[37m⣾[0m[KConnecting to fdaa:8:74c3:a7b:e7:8c67:2d54:2...[37m⣽[0m[KConnecting to fdaa:8:74c3:a7b:e7:8c67:2d54:2...[37m⣻[0m[?25h[KConnecting to fdaa:8:74c3:a7b:e7:8c67:2d54:2... complete
psql (17.2 (Ubuntu 17.2-1.pgdg24.04+1))
Type "help" for help.

[?2004hpostgres=# CREATE TABLE blogs (id SERIAL PRIMARY KEY, author STRING, url STRING NOT null, title STRING
 NOT null, likes int)
;[A[A[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[Cstring, url string NOT null, title string

[C[K[K[A[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C;[A[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[1P[1P[1P[1P[1P[1P[1P[1@t[1@e[1@x[1@t[1@,[C[C[C[C[C[C[C[C[C[C[C[C[1P[1P[1P[1P[1P[1P[1@t[1@e[1@x[1@t[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C      text

[?2004lCREATE TABLE
[?2004hpostgres=# \d
[?2004l              List of relations
 Schema |     Name     |   Type   |  Owner   
--------+--------------+----------+----------
 public | blogs        | table    | postgres
 public | blogs_id_seq | sequence | postgres
(2 rows)

[?2004hpostgres=# INSERT INTO b[Kblogs (author, url, title,l[Klikes) VALUES ( [K"mu[K[KTesteri[K", "test.me.please" [K, "WORTHY" 0[K[K, 1)
[?2004l[?2004hpostgres-# ;
[?2004lERROR:  column "Tester" does not exist
LINE 1: ...ERT INTO blogs (author, url, title,likes) VALUES ("Tester", ...
                                                             ^
[?2004hpostgres=# INSERT INTO blogs (author, url, title,likes) VALUES ("Tester", "test.me.please", "WORTHY", 1)
;[A[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[1P[1@'[C[C[C[C[C[C[C[C[C[1P[1@'[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[1P[1@'[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[1P[1@'[C[C[C[C[C

[?2004lERROR:  column "WORTHY" does not exist
LINE 1: ... title,likes) VALUES ('Tester', 'test.me.please', "WORTHY", ...
                                                             ^
[?2004hpostgres=# INSERT INTO blogs (author, url, title,likes) VALUES ('Tester', 'test.me.please', "WORTHY", 1)
;[A[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[1P[1@'[C[C[C[C[C[C[C[1P[1@'

[?2004lINSERT 0 1
[?2004hpostgres=# INSERT INTO blogs (author, url, title,likes) VALUES ('Tester', 'test.me.please', 'WORTHY', 1)
;[A[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[1P[1P[1P[1P[1P[1P[1P[1P[1P[1@h[1P[1@d[1@a[1@y[1P[1@d[1@d[1@y[1@.[1@g[1@o[1@L[1@i[1@a[1@r[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[1P[1P[1P[1P[1P[1P[1@A[1@Å[1P[1@D[1@D[C[C[C[C2)

[?2004lINSERT 0 1
[?2004hpostgres=# [?2004l
\q
[?2004h]0;kirillos@YogaKi: ~/courses/Part13_SQL[01;32mkirillos@YogaKi[00m:[01;34m~/courses/Part13_SQL[00m$ [?2004l
exit

Script done on 2025-08-03 14:32:40+03:00 [COMMAND_EXIT_CODE="0"]
