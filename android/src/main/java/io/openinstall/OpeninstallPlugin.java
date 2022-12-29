package io.openinstall;

import android.content.Intent;
import android.util.Log;

import androidx.annotation.NonNull;

import com.fm.openinstall.Configuration;
import com.fm.openinstall.OpenInstall;
import com.fm.openinstall.listener.AppInstallAdapter;
import com.fm.openinstall.listener.AppInstallRetryAdapter;
import com.fm.openinstall.model.AppData;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Openinstall")
public class OpeninstallPlugin extends Plugin {

    private static final String TAG = "capacitor-openinstall";

    private Openinstall implementation = new Openinstall();
    private Configuration configuration = null;

    @PluginMethod
    public void configure(PluginCall call) {
        boolean adEnabled = call.getBoolean("adEnabled", false);
        boolean macDisabled = call.getBoolean("macDisabled", false);
        boolean imeiDisabled = call.getBoolean("imeiDisabled", false);
        String gaid = call.getString("gaid");
        String oaid = call.getString("oaid");

        Configuration.Builder builder = new Configuration.Builder();
        builder.adEnabled(adEnabled);
        if (macDisabled) {
            builder.macDisabled();
        }
        if (imeiDisabled) {
            builder.imeiDisabled();
        }
        builder.gaid(gaid).oaid(oaid);
        configuration = builder.build();
        call.resolve();
    }

    @PluginMethod
    public void serialEnabled(PluginCall call) {
        boolean enabled = call.getBoolean("enabled", false);
        OpenInstall.serialEnabled(enabled);
        call.resolve();
    }

    @PluginMethod
    public void clipBoardEnabled(PluginCall call) {
        boolean enabled = call.getBoolean("enabled", false);
        OpenInstall.clipBoardEnabled(enabled);
        call.resolve();
    }

    @PluginMethod
    public void init(PluginCall call) {
        OpenInstall.init(getContext(), configuration);
        call.resolve();
    }

    @PluginMethod
    public void getInstall(PluginCall call) {
        int timeout = call.getInt("timeout", 10);
        OpenInstall.getInstall(new AppInstallAdapter() {
            @Override
            public void onInstall(@NonNull AppData appData) {
                Log.d(TAG, "getInstall # " + appData.toString());
                JSObject jsObject = parseData(appData);
                call.resolve(jsObject);
            }
        }, timeout);
    }

    @PluginMethod
    public void getInstallCanRetry(PluginCall call) {
        int timeout = call.getInt("timeout", 10);
        OpenInstall.getInstall(new AppInstallRetryAdapter() {
            @Override
            public void onInstall(@NonNull AppData appData, boolean retry) {
                Log.d(TAG, "getInstall # " + appData.toString());
                JSObject jsObject = parseData(appData);
                jsObject.put("retry", retry);
                call.resolve(jsObject);
            }
        }, timeout);
    }

    @Override
    protected void handleOnNewIntent(Intent intent) {
        super.handleOnNewIntent(intent);
        getWakeUp(intent);
    }

    @Override
    @PluginMethod(returnType = PluginMethod.RETURN_NONE)
    public void addListener(PluginCall call) {
        super.addListener(call);
        String eventName = call.getString("eventName");
        if ("wakeUp".equals(eventName)) {
            Intent intent = getActivity().getIntent();
            getWakeUp(intent);
        }
    }

    private void getWakeUp(Intent intent) {
        OpenInstall.getWakeUpAlwaysCallback(intent, (appData, error) -> {
            if (error != null) {
                Log.d(TAG, "getWakeUpAlwaysCallback # " + error.toString());
            }
            JSObject jsObject = parseData(appData);
            notifyListeners("wakeUp", jsObject);
        });
    }

    private JSObject parseData(AppData appData) {
        JSObject jsObject = new JSObject();
        if (appData != null) {
            jsObject.put("channel", appData.getChannel());
            jsObject.put("data", appData.getData());
        }
        return jsObject;
    }

    @PluginMethod
    public void reportRegister(PluginCall call) {
        OpenInstall.reportRegister();
        call.resolve();
    }

    @PluginMethod
    public void reportEffectPoint(PluginCall call) {
        String pointId = call.getString("pointId", null);
        Long pointValue = call.getLong("pointValue", null);
        if (pointId != null && pointValue != null) {
            Log.d(TAG, "reportEffectPoint # pointId:" + pointId + ", pointValue:" + pointValue);
            OpenInstall.reportEffectPoint(pointId, pointValue);
        }
        call.resolve();
    }

}
