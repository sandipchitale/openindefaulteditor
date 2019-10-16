'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as child_process from 'child_process';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('extension.openindefaulteditor', openInDefaultEditor);

    context.subscriptions.push(disposable);

}

// this method is called when your extension is deactivated
export function deactivate() {
}

function openInDefaultEditor(uri) {
    if (uri) {
        child_process.spawn('cmd',
            [
                '/S',
                '/C',
                'start',
                '""',
                '' + uri.fsPath + ''
            ]);
    }
}
