import os
from datetime import datetime

def submit():
    time = datetime.now().strftime('%Y/%m/%d-%H:%M:%S')
    os.system('git add ./')
    os.system('git commit -m %s' % time)
    res = os.popen('git pull')
    f = res.read()
    print(f)
    print('下载完成------------------', time)

if __name__ == '__main__':
    submit()